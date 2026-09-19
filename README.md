# Siddhant Mutha — Research & Engineering Portfolio

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

## ✏️ How to Update or Add Content

All portfolio content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts). To add or edit items, simply modify the corresponding array:

### 1. Adding a New Research Experience
Add an object to `experiences`:
```typescript
{
  id: 'new-research-lab',
  role: 'Research Fellow',
  organization: 'Observatory / Institute',
  location: 'City, Country',
  period: 'Jan 2026 – Present',
  description: 'Overview of the research focus and responsibilities.',
  details: [
    'Key finding or development milestone 1',
    'Key finding or development milestone 2',
  ],
  tags: ['Radio Astronomy', 'Python', 'Signal Processing'],
  icon: Radio,
  color: 'gold', // 'gold' | 'cosmic' | 'purple'
}
```

### 2. Adding a New Project
Add an object to `projects`:
```typescript
{
  title: 'Project Title',
  subtitle: 'Hardware / Software / Research Domain',
  description: 'Concise summary of what the system does and why it was built.',
  details: [
    'Technical feature or benchmark 1',
    'Technical feature or benchmark 2',
  ],
  icon: Cpu,
  tags: ['FPGA', 'Verilog', 'DSP'],
  color: 'cosmic',
  year: '2025',
  links: [{ label: 'Source', href: 'https://github.com/...' }],
}
```

### 3. Adding Workshops or Community Activities
Similarly, update `workshops[]`, `communityItems[]`, or `educationData[]` directly in `portfolio.ts`.

---

## 💻 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run local dev server**:
   ```bash
   npm run dev
   ```
   Open your browser to `http://localhost:3000` (or the port specified in terminal output).

3. **Type-check and Build**:
   ```bash
   npm run build
   ```

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 🌐 GitHub Pages Deployment

The application is configured with `base: './'` in `vite.config.ts` and uses `HashRouter` (`/#/about`, `/#/research`, etc.) so that refreshing routes on static hosting environments like GitHub Pages works without 404 errors.

### Deploying to GitHub Pages:
1. Build the production bundle:
   ```bash
   npm run build
   ```
2. Deploy the `dist/` directory using the `gh-pages` CLI or configure GitHub Actions to deploy from the `dist` folder upon push to `main`.
