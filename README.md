# 🌌 Interactive Engineering Portfolio

Live: https://shubhamjha.me

An interactive, performance-focused engineering portfolio built to showcase projects, technical depth, and frontend engineering capabilities through immersive UI experiences.

Rather than being a static portfolio, this project explores interaction design, animation performance, gesture handling, and scalable frontend architecture.

---

## ✨ Highlights

- HTML5 Canvas starfield & constellation renderer
- Interactive animated background
- Draggable floating mobile menu
- Fully responsive layout
- Developer activity aggregation display
- Contact & outreach pipeline
- Performance-optimized asset delivery
- Serverless-backed data aggregation

The goal is a **polished, interactive portfolio** demonstrating engineering quality rather than a simple showcase website.

---

## 🚀 Demo

Live portfolio:  
👉 [Interactive portfolio website](https://www.shubhamjha.me)

---

## 🧠 Engineering Focus Areas

### Canvas Rendering System
A custom starfield & constellation renderer using HTML5 Canvas.

Features include:
- Dynamic star rendering
- Interactive connections
- Performance tuning for mobile devices
- Memory vs compute tradeoff evaluations

Implemented using a reusable `useStarField` hook.

---

### Gesture & Interaction Engineering
A floating menu can be dragged across the screen while still supporting click interactions.

A custom `useDrag` hook handles:

- Drag vs click intent detection
- Movement threshold handling
- Pointer lifecycle correctness
- Compatibility with Radix UI controlled components

---

### UI Architecture Decisions
Significant effort went into ensuring:

- Dragging does not trigger menu clicks
- Controlled components behave correctly
- No event-order hacks are required
- UI remains predictable across devices

---

### Performance Optimizations
Includes:

- Optimized image loading
- Reduced asset sizes
- Responsive layout constraints
- Hydration fixes
- Mobile UX improvements

Thumbnail images are served via:

- Amazon S3 storage
- CloudFront CDN distribution

for faster global delivery.

---

### Backend Integration
The frontend consumes serverless APIs that:

- Aggregate GitHub contribution data
- Fetch LeetCode statistics
- Fetch Codeforces statistics
- Cache responses to reduce API rate limits
- Protect API tokens

The backend runs independently as serverless functions on Vercel.

Backend repository is linked below.

---

## 🛠 Tech Stack

Frontend:
- React
- TypeScript
- TailwindCSS
- Radix UI
- HTML5 Canvas
- Vercel Hosting

Backend services:
- Vercel Serverless Functions
- Aggregation APIs
- Response caching

Assets:
- Amazon S3
- CloudFront CDN

---

## 📦 Local Development

```bash
git clone https://github.com/Shubham04Jha/Portfolio.git
cd portfolio-frontend
npm install
npm run dev
````

Environment variables may be required depending on API configuration.

---

## 📁 Project Structure (Simplified)

```
src/
 ├── components/
 ├── hooks/
 │   ├── useStarField
 │   └── useDrag
 └── utils/
```

Core logic resides mainly in custom hooks and interactive components.

---

## 📈 Impact Goals

Success metrics include:

* Positive user feedback
* Recruiter engagement
* GitHub stars & forks
* Portfolio traffic
* Community interest

---

## 🔮 Planned Improvements

* Additional projects & case studies
* Content polish & storytelling
* Improved reachout UX
* Config-driven project management
* Further animation refinement

---

## 🔗 Backend Repository

This portfolio relies on a separate backend repository providing aggregation and messaging APIs and may require environment variables for personal use case do check the backend repo to understand how you could customise:

👉 **[Backend Repo](https://github.com/Shubham04Jha/portfolio-backend)**

---

## 📬 Contact

If you'd like to collaborate or discuss opportunities, feel free to reach out via the portfolio contact section.

---

## ⭐ If you like this project

Consider giving the repo a star!
