# Siddhant Mutha —  Portfolio

An interactive, deep-space themed academic and research portfolio for **Siddhant Mutha**, specializing in Physics, Electronics Engineering, and Radio Astronomy (FRB detection with GMRT / NCRA-TIFR).

---

## 🚀 Key Features & Highlights

- **Aesthetic**: Deep-field astrophotography theme with realistic CSS-rendered planets, twinkling starfield, and Gamma-Ray Burst (GRB) sequence.
- **Centralized Data Layer**: All portfolio content (research, projects, education, skills, workshops, community initiatives, contact info) is defined in a single typed configuration file: [`src/data/portfolio.ts`](src/data/portfolio.ts).
- **Multi-Page Routing**: Powered by `react-router` with `HashRouter` ensuring seamless navigation and 100% compatibility with GitHub Pages (no 404 on page refresh).
- **Responsive & Performant**: Built with Vite 7, React 19, Tailwind CSS 3.4, and Framer Motion 12 with lightweight micro-animations.

---

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite 7](https://vite.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/) (`HashRouter`)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Project Architecture

```
app/
├── src/
│   ├── components/          # Reusable UI elements
│   │   ├── Navigation.tsx   # Top navigation with active route indicators
│   │   ├── Footer.tsx       # Bottom footer with quick links
│   │   ├── PageLayout.tsx   # Animated route wrapper (Framer Motion)
│   │   ├── ParticleField.tsx# Deep-field canvas starfield with nebulae & twinkling
│   │   └── SolarSystemLoader.tsx # Realistic CSS gradient planets loader
│   ├── data/
│   │   └── portfolio.ts     # ⭐ Centralized data source for all sections
│   ├── sections/            # Clean presentation components
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── WorkshopsSection.tsx
│   │   ├── CommunitySection.tsx
│   │   └── ContactSection.tsx
│   ├── App.tsx              # Application shell & HashRouter page routes
│   ├── main.tsx             # React DOM root initialization
│   └── index.css            # Deep-space color variables & utility classes
├── public/
│   └── assets/              # Media assets (GRB hero video, photos, deep-space imagery)
├── vite.config.ts           # Vite configuration with relative base './'
└── package.json
```

---

