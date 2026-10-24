# Tharuni Lodi — Portfolio

Personal developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- Responsive layout for mobile, tablet, and desktop
- Intro / hero section and about overview
- Skills across web development, AI/ML, and app development
- Selected projects with GitHub repository links and live demos where available
- Contact links for email, GitHub, and LinkedIn
- Subtle animations and reduced-motion support

## Run locally

Requires a recent Node.js installation.

```bash
git clone https://github.com/tharuni2503/portfolio.git
cd portfolio
npm install
npm run dev
```

To create a production build:

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Sign in to Vercel and choose **Add New → Project**.
2. Import `tharuni2503/portfolio` from GitHub.
3. Keep the default Vite build settings (`npm run build`, output directory `dist`).
4. Click **Deploy**. Future commits to the connected branch can trigger new deployments.

## Customize

- Edit project cards in `src/components/Projects.jsx`.
- Update biography and focus areas in `src/components/Services.jsx`.
- Update skill groups in `src/components/WhyChooseMe.jsx`.
- Update the email and profile links in `src/components/Contact.jsx`, `src/components/Footer.jsx`, and `src/components/Navbar.jsx`.

## Links

- GitHub: https://github.com/tharuni2503
- LinkedIn: https://www.linkedin.com/in/tharunilodi
