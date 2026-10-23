import { PrismaClient } from '@prisma/client';

function getOptimizedDatabaseUrl(): string | undefined {
  let dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) return undefined;

  // In Neon, routed connections need the connection pooler (-pooler) to prevent idle timeouts & connection drops
  if (dbUrl.startsWith('postgresql://') || dbUrl.startsWith('postgres://')) {
    try {
      const urlObj = new URL(dbUrl);
      if (urlObj.hostname.includes('.neon.tech') && !urlObj.hostname.includes('-pooler')) {
        const parts = urlObj.hostname.split('.');
        parts[0] = `${parts[0]}-pooler`;
        urlObj.hostname = parts.join('.');
      }

      if (!urlObj.searchParams.has('sslmode')) {
        urlObj.searchParams.set('sslmode', 'require');
      }
      if (!urlObj.searchParams.has('connect_timeout')) {
        urlObj.searchParams.set('connect_timeout', '30');
      }
      if (!urlObj.searchParams.has('pool_timeout')) {
        urlObj.searchParams.set('pool_timeout', '30');
      }
      if (!urlObj.searchParams.has('connection_limit')) {
        urlObj.searchParams.set('connection_limit', '10');
      }
      dbUrl = urlObj.toString();
    } catch {
      // Fallback to original string if URL parsing fails
    }
  }

  return dbUrl;
}

const resolvedDbUrl = getOptimizedDatabaseUrl();

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

const basePrisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    datasources: resolvedDbUrl
      ? {
          db: {
            url: resolvedDbUrl,
          },
        }
      : undefined,
    log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
  });

export const prisma = basePrisma.$extends({
  query: {
    async $allOperations({ operation, model, args, query }) {
      try {
        return await query(args);
      } catch (error: any) {
        // Automatically retry once if the serverless connection closed or reset
        if (
          error?.message?.includes('closed the connection') ||
          error?.message?.includes('ECONNRESET') ||
          error?.code === 'P1017'
        ) {
          console.warn(`[Prisma] Connection closed by remote server. Retrying ${model || 'query'}.${operation}...`);
          return await query(args);
        }
        throw error;
      }
    },
  },
}) as unknown as PrismaClient;

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = basePrisma;
}
