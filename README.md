

# Siddhant Mutha Website

A personal website of **Siddhant Mutha (me)**, a curious observer interested in Physics, Electronics, Radio Astronomy, and scientific instrumentation.

The website uses a deep space visual theme inspired by astronomy, scientific visualization, and observatory interfaces.



---

## Technical Stack

- **React 19** for the user interface
- **TypeScript** for type-safe development
- **Vite 7** for development and production builds
- **React Router v7** with `HashRouter` for navigation
- **Tailwind CSS 3.4** for styling
- **Framer Motion 12** for animations and page transitions
- **Lucide React** for icons
- **HTML Canvas** for the animated starfield
- **CSS animations and gradients** for planets, orbital rings, glows, and visual effects

---

## Visual Theme

The website is designed around a **deep space and astronomy theme**, combining a CV with a visual experience inspired by the night sky, observatories, and scientific instruments.

### Solar System Loading Animation

The loading screen features a custom animated solar system instead of a standard loading spinner.

It includes:

- Animated planets with CSS gradients
- Saturn and its rings
- Jupiter with its Great Red Spot
- Animated solar surface and solar burst effects
- Orbital motion
- Animated loading messages and progress

### Animated Starfield

The background uses an HTML Canvas based procedural starfield instead of a static background.

It includes:

- Moving stars
- Twinkling stars
- Different star sizes and brightness
- Cosmic dust and nebula effects
- Subtle mouse interaction
- Connecting star effects

### Hero Video

The hero section uses the NASA Scientific Visualization Studio's **GRB Afterglow** visualization because its visual style fits the website's interest in transient astronomy and Fast Radio Bursts.

> **Source and credit:** NASA / NASA Scientific Visualization Studio  
> [https://svs.gsfc.nasa.gov/20378/](https://svs.gsfc.nasa.gov/20378/)

**File used:**

`GRB_afterglow_1080_30fps_h264.mp4`

### Deep Field Background

The website uses a lightweight deep field style background inspired by **James Webb Space Telescope (JWST)** imagery.

The original imagery is very high resolution, so a lighter version was prepared for the website to reduce loading time while keeping the overall visual atmosphere.

### Scroll and Page Animations

Framer Motion is used for subtle:

- Page transitions
- Scroll based section reveals
- Fade and slide animations
- Hover interactions
- Navigation transitions

The animations are kept lightweight so that the website remains smooth while maintaining the space theme.

---

## Project Structure

```text
src/
├── components/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── PageLayout.tsx
│   ├── ParticleField.tsx
│   └── SolarSystemLoader.tsx
│
├── data/
│   └── portfolio.ts
│
├── sections/
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── EducationSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   ├── WorkshopsSection.tsx
│   ├── CommunitySection.tsx
│   └── ContactSection.tsx
│
├── App.tsx
├── main.tsx
└── index.css

public/
└── assets/
```

> **Note:** Portfolio content is centralized in:  
> `src/data/portfolio.ts`  

<<<<<<< HEAD



## Credits

- **GRB Afterglow visualization:** NASA / NASA Scientific Visualization Studio  
  [https://svs.gsfc.nasa.gov/20378/](https://svs.gsfc.nasa.gov/20378/)
- **Deep field visual inspiration:** James Webb Space Telescope (JWST)
- **Website design, development, and custom visual effects:** Siddhant Mutha
=======
