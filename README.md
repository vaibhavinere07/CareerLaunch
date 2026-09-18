🚀 CareerLaunch
AI-Powered Internship Management System
CareerLaunch is a comprehensive, role-based internship management platform designed to streamline the complete internship lifecycle for colleges, universities, and technical institutions.

It brings students, company recruiters, Training & Placement (T&P) administrators, and faculty mentors together on a single platform — from student registration and eligibility verification to internship applications, offers, progress tracking, evaluations, completion certificates, and PPO management.

✨ Features
🎓 Student Portal
Create and manage student profiles

Track profile completeness

Add academic details, skills, projects, and certifications

View eligible internship opportunities

Receive AI-assisted career and skill-gap insights

Apply for internships

Track application and selection status

Accept or decline internship offers

View assigned faculty mentor

Submit weekly internship progress reports

Track performance and completion status

View and verify internship certificates

Track Pre-Placement Offers (PPOs)

🏢 Company Recruiter Portal
Manage company profile

Create and publish internship vacancies

Define eligibility criteria

View eligible and AI-matched candidates

Review applications

Shortlist and select candidates

Issue internship offers

Track applicant and selection statistics

Evaluate student performance

Manage PPO recommendations

🏛️ T&P Administration Portal
Verify student profiles

Manage internship opportunities

Review eligibility and application data

Verify internship offers

Approve internship completion

Assign faculty mentors

Monitor student progress

Manage verification queues

View institutional analytics

Track placement and internship funnels

Monitor department and batch-level statistics

Maintain audit trails

👨‍🏫 Faculty Mentor Portal
View assigned mentees

Review student profiles

Monitor weekly progress reports

Provide feedback

Flag progress issues

Track student performance

Submit structured evaluation rubrics

Participate in internship completion evaluation

🤖 AI-Powered Features
CareerLaunch uses AI as an assistive layer, while keeping critical institutional decisions deterministic and human-controlled.

AI capabilities include:

Resume and profile analysis

Candidate matching

Skill-gap identification

Personalized learning roadmaps

Resume improvement suggestions

Contextual career assistance

Match explanations

Important: AI does not autonomously hire, reject, verify, or approve candidates. Eligibility, verification, and final selection remain governed by deterministic business rules and authorized human users.

🔄 Internship Lifecycle
CareerLaunch manages the internship process through an end-to-end workflow:

Student Registration
        ↓
Profile Creation
        ↓
Profile Verification
        ↓
Eligibility Evaluation
        ↓
Company Vacancy Posting
        ↓
AI Candidate Matching
        ↓
Student Application
        ↓
Company Review & Shortlisting
        ↓
Candidate Selection
        ↓
Offer Letter
        ↓
T&P Verification
        ↓
Offer Acceptance
        ↓
Faculty Mentor Assignment
        ↓
Weekly Progress Tracking
        ↓
Mentor & Company Evaluation
        ↓
Internship Completion
        ↓
Certificate Verification
        ↓
PPO Recording
        ↓
Institutional Analytics

🏗️ Architecture
CareerLaunch follows a Modular Monolith architecture with clear internal service boundaries. This provides straightforward local development while allowing the system to evolve toward independently deployable services as scale increases. 
G
GitHub
+1

┌───────────────────────────────────────────────────────────┐
│                    FRONTEND APPLICATION                    │
│            React + TypeScript + Tailwind + Vite            │
│                                                           │
│ Student │ Company │ T&P Admin │ Faculty Mentor            │
└──────────────────────────┬────────────────────────────────┘
                           │
                     HTTPS / REST
                           │
                           ▼
┌───────────────────────────────────────────────────────────┐
│                    BACKEND APPLICATION                    │
│                Node.js + Express + TypeScript              │
│                                                           │
│ Auth & Identity                                           │
│ Student Management                                        │
│ Company & Vacancy Management                              │
│ Eligibility Engine                                        │
│ Candidate Matching                                        │
│ Application Management                                    │
│ Offer & Verification                                      │
│ Mentor & Progress Tracking                                │
│ Evaluation & Completion                                   │
│ PPO Lifecycle                                             │
│ Analytics & Audit                                         │
└───────────────┬─────────────────┬─────────────────────────┘
                │                 │
                ▼                 ▼
       ┌────────────────┐   ┌──────────────────┐
       │  PostgreSQL    │   │ Object Storage   │
       │    + Prisma    │   │   S3 / MinIO     │
       └────────────────┘   └──────────────────┘
                │
                ▼
       ┌────────────────────────┐
       │     AI Service         │
       │    Google Gemini       │
       └────────────────────────┘

🛠️ Tech Stack
Frontend
React 18

TypeScript

Vite

Tailwind CSS

Recharts

React Router

Backend
Node.js

Express.js

TypeScript

Prisma ORM

Zod

JWT Authentication

REST APIs

Database & Storage
PostgreSQL

Prisma ORM

AWS S3 / MinIO

Pre-signed URLs for private document access

AI
Google Gemini / Generative AI

AI-assisted candidate matching

Resume feedback

Skill-gap analysis

Personalized learning roadmaps

Contextual AI assistance

Testing & Development
Jest

ts-jest

Concurrent development servers

TypeScript

npm

The repository is organized as a frontend/backend monorepo and includes scripts for development, production builds, database operations, and testing. 
G
GitHub

📁 Project Structure
CareerLaunch/
│
├── backend/
│   ├── src/
│   ├── prisma/
│   ├── tests/
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── tests/
│
├── docs/
│
├── HLD.md
├── PROJECT_STATE.md
├── package.json
├── package-lock.json
├── tsconfig.json
├── jest.config.js
├── render.yaml
└── .env.example

⚙️ Getting Started
Prerequisites
Make sure you have the following installed:

Node.js 18+

npm

PostgreSQL

Git

1. Clone the Repository
git clone https://github.com/vaibhavinere07/CareerLaunch.git
cd CareerLaunch

2. Install Dependencies
Install root dependencies:

npm install

Install frontend dependencies:

cd frontend
npm install
cd ..

Install backend dependencies:

cd backend
npm install
cd ..

3. Configure Environment Variables
Create the required environment configuration using the provided example:

cp .env.example .env

Configure your database, authentication, storage, and AI credentials in the .env file.

Never commit API keys, passwords, JWT secrets, or other sensitive credentials to Git.

4. Configure the Database
Make sure PostgreSQL is running and configure your database connection.

Then run:

npm run db:push

To seed the database:

npm run db:seed

🚀 Running the Application
Start both frontend and backend in development mode:

npm run dev

This runs:

Backend  → Development Server
Frontend → Vite Development Server

You can also start them separately.

Backend
npm run dev:backend

Frontend
npm run dev:frontend

🧪 Testing
Run the complete test suite:

npm test

Run backend tests:

npm run test:backend

Run root/architecture tests:

npm run test:root

The repository's current project-state document reports 20 test suites with 225 tests passing, covering areas such as authentication, profiles, eligibility, matching, offers, mentor assignment, progress tracking, evaluations, PPO management, analytics, AI features, notifications, security, and end-to-end lifecycle testing. 
G
GitHub

🔐 Security
CareerLaunch includes multiple security mechanisms designed for an institutional environment:

JWT-based authentication

Server-side role-based access control

Password hashing

Request validation

CORS protection

Rate limiting

Private document storage

Pre-signed file URLs

Audit logging

Resource ownership checks

Secure verification workflows

Critical eligibility and verification operations are intentionally separated from AI services so that AI cannot override deterministic institutional rules. 
G
GitHub
+1

👥 User Roles
Role	Main Responsibilities
🎓 Student	Profile, applications, offers, progress reports
🏢 Company Recruiter	Vacancies, candidates, selection, offers, evaluations
🏛️ T&P Admin	Verification, governance, analytics, mentor assignment
👨‍🏫 Faculty Mentor	Mentoring, progress review, feedback, evaluation

📊 Candidate Matching
The platform combines deterministic eligibility with AI-assisted candidate matching.

The documented matching model uses weighted factors:

Skills       → 40%
Projects     → 25%
Academics    → 20%
Certifications → 15%

Eligibility remains a separate deterministic process, meaning an AI match score cannot make an otherwise ineligible candidate eligible. 
G
GitHub

📈 Institutional Analytics
T&P administrators can monitor institutional-level internship data, including:

Internship application funnel

Selection and conversion metrics

Department performance

Batch-level statistics

Stipend statistics

Skill-gap reports

Internship completion

PPO statistics

Student progress indicators

📜 Internship Verification
CareerLaunch supports verifiable internship records through verification codes and QR-based verification workflows.

This allows authorized third parties to verify internship-related records without exposing private application data.

📱 Responsive Design
The platform is designed for different screen sizes and includes:

Responsive dashboards

Mobile navigation

Sidebar drawer

Responsive tables and cards

Accessible controls

Consistent UI components

Role-specific dashboard experiences

🌟 Project Highlights
🔐 Role-based institutional platform

🤖 AI-assisted career and candidate intelligence

🎯 Deterministic eligibility engine

📝 Complete internship application lifecycle

📄 Offer and certificate verification

👨‍🏫 Faculty mentoring workflow

📊 Institutional analytics

🔔 Centralized notifications

🧾 Audit logging

📱 Responsive UI

🧪 Automated test coverage

🏗️ Modular architecture designed for scalability

🗺️ Future Enhancements
Potential future improvements include:

Advanced AI career recommendations

Automated internship opportunity discovery

More detailed skill-gap analytics

Email and WhatsApp notifications

Calendar integration

Advanced recruiter analytics

Multi-institution support

Microservice extraction for high-scale deployments

Mobile applications

Enhanced certificate verification

🤝 Contributing
Contributions are welcome!

Fork the repository

Create a feature branch

git checkout -b feature/your-feature

Make your changes

Run the test suite

npm test

Commit your changes

git commit -m "feat: add your feature"

Push your branch

git push origin feature/your-feature

Open a Pull Request

📄 License
Please refer to the repository's license information for the applicable terms.

👨‍💻 Project
CareerLaunch — AI-Powered Internship Management System

Built to simplify and digitize the complete internship lifecycle for students, institutions, and companies.

⭐ If you find this project useful, consider starring the repository!
