# Nishanth Raj — Software Developer Portfolio

[![Portfolio Live](https://img.shields.io/badge/Portfolio-Live_Demo-blue?style=for-the-badge&logo=google-chrome)](https://myportfolio9618.netlify.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github)](https://github.com/Raj72620)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](http://www.linkedin.com/in/nishanth-singh)
[![GeeksforGeeks](https://img.shields.io/badge/GeeksforGeeks-Rank_%231-2F8D46?style=for-the-badge&logo=geeksforgeeks)](https://www.geeksforgeeks.org/profile/nishanthraj)

> **"I design, build and deploy full-stack applications, real-time systems and backend platforms with a focus on practical engineering, performance and scalable architecture."**

---

## 🎯 Architecture & Overview

This repository houses the complete source code for **Nishanth Raj's** engineering portfolio. Designed with a **truth-first, evidence-driven standard**, every project, capability, and metric showcased is verifiable through running code, public repositories, or demonstrated test results.

- **Frontend:** React 19, TypeScript, Vite, CSS Modules, Framer Motion, React Icons.
- **Backend:** Node.js, Express, MongoDB Atlas / Mongoose, Nodemailer, Rate Limiting, CORS.
- **Design Standard:** Dark, minimal, technical, accessible (WCAG compliant), and fully responsive across mobile, tablet, and desktop viewports.

---

## 🚀 Key Sections & Information Architecture

1. **Hero & Quick Proof:** Core technical statement, 4 primary pillars (**Build**, **Teach**, **Solve**, **Contribute**), and verified credentials (2026 IT Graduate, 300+ DSA Problems Solved, GFG Institute Rank #1, SIH 2024 Grand Finalist).
2. **Selected Work (Flagship Projects):**
   - **DiscussionHub:** Technical community forum with categorized threads, JWT auth, and Socket.IO real-time notifications.
   - **Digital Voting Platform:** Blockchain voting architecture utilizing Solidity smart contracts for ballot immutability and off-chain caching for candidate metadata.
   - **Video Conferencing Platform:** Real-Time WebRTC P2P mesh audio/video platform with Socket.IO signaling, tested with 5 concurrent participants and dynamic bitrate constraints (<200ms target latency, bandwidth reduced from ~10 Mbps to ~1.5 Mbps in 7-user scenario).
   - **CodeSphere Platform:** Developer algorithmic workspace featuring code editor, automated test runner pipeline, and execution safety timeouts.
3. **17-Point Engineering Case Studies:** Each flagship project features an interactive case study covering: Overview, Problem, Objective, What I Built, Features, System Architecture (ASCII data flow), Tech Decisions, Database Schema, API Contracts, Performance & Labeled Metrics, Challenges, Solutions, Limitations, Learnings, Future Work, GitHub, and Live Demo.
4. **What I've Done:** Technical mentoring (100+ students across colleges), independent full-stack engineering, practical applied AI integrations (LLM APIs, prompt engineering, code assistance), and open-source contributions.
5. **Languages & Engineering:** Focused toolchain (Java, JavaScript/TypeScript, SQL) alongside 6 core foundations: Full-Stack, Backend & APIs, Real-Time Systems, Databases, Core Computer Science, and System Design.
6. **Problem Solving:** 300+ verified solutions across GeeksforGeeks and LeetCode covering Arrays, Hashing, Trees, Graphs, DP, Greedy, Binary Search, and Heaps.
7. **Verified Achievements & Lightbox:** National Grand Finalist in Smart India Hackathon 2024, 2nd Place Runner-Up in Intellecthon, GFG Rank #1, ProSolvo 1st Place Champion, and MongoDB Certified Developer with high-res certificate verification.
8. **Progression, Services & Contact:** 2024–2026 chronological trajectory, freelance development services, and an active contact form backed by MongoDB persistence and Nodemailer email dispatch.

---

## 📁 Repository Structure

```text
my-portfolio/
├── backend/
│   ├── models/
│   │   ├── Collaboration.js       # Mongoose model for collaborations
│   │   └── ContactMessage.js      # Mongoose model for contact inquiries
│   ├── .env.example               # Template environment variables
│   ├── package.json
│   └── server.js                  # Express API server with MongoDB & Nodemailer
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/                # Verified certificate images & project screenshots
│   │   ├── components/            # Modular React components
│   │   │   ├── About.tsx
│   │   │   ├── Achievements.tsx
│   │   │   ├── CaseStudyModal.tsx
│   │   │   ├── CaseStudyPage.tsx
│   │   │   ├── CertificateModal.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Engineering.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Home.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── ProblemSolving.tsx
│   │   │   ├── ProgrammingLanguages.tsx
│   │   │   ├── QuickProof.tsx
│   │   │   ├── SelectedWork.tsx
│   │   │   ├── ServicesAndFreelance.tsx
│   │   │   ├── TimelineJourney.tsx
│   │   │   └── WhatIveDone.tsx
│   │   ├── data/
│   │   │   └── portfolioData.ts   # Centralized evidence database & 17-point case studies
│   │   ├── styles/                # CSS modules for scoped styling
│   │   │   └── global.css         # Dark technical design system tokens & utilities
│   │   ├── App.tsx                # SPA routing and layout
│   │   └── main.tsx
│   ├── .env.example
│   ├── _redirects                 # SPA routing redirect for Netlify
│   ├── index.html                 # Optimized SEO & OpenGraph meta tags
│   ├── package.json
│   └── vite.config.ts
├── .gitignore
└── README.md
```

---

## ⚙️ Getting Started Locally

### Prerequisites
- Node.js (v18+)
- npm (v9+)
- MongoDB Atlas cluster or local MongoDB instance

### 1. Clone the repository
```bash
git clone https://github.com/Raj72620/My-Portfolio.git
cd My-Portfolio
```

### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB Atlas URI and Gmail credentials
npm start
```
*Backend server runs at `http://localhost:5000` with health check at `GET /api/health`.*

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
*Frontend dev server boots with Vite at `http://localhost:5173`.*

### 4. Production Build
```bash
cd frontend
npm run build
```
*Generates optimized production bundle in `frontend/dist/` with zero TypeScript errors.*

---

## 📬 Contact & Connect

- **Email:** [nishanthraj9618@gmail.com](mailto:nishanthraj9618@gmail.com)
- **LinkedIn:** [linkedin.com/in/nishanth-singh](http://www.linkedin.com/in/nishanth-singh)
- **GitHub:** [github.com/Raj72620](https://github.com/Raj72620)
- **Resume:** [View Official Resume](https://drive.google.com/file/d/1xiT24E0DgYygnpvr76QwHVpYqKKpMpVy/view?usp=sharing)

---

© 2026 Nishanth Raj. Built with precision and practical engineering standards.
