import { useState, useCallback, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import SolarSystemLoader from './components/SolarSystemLoader';
import ParticleField from './components/ParticleField';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PageLayout from './components/PageLayout';
import HeroSection from './sections/HeroSection';
import HomeIntroSection from './sections/HomeIntroSection';
import AboutSection from './sections/AboutSection';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import WorkshopsSection from './sections/WorkshopsSection';
import CommunitySection from './sections/CommunitySection';
import GallerySection from './sections/GallerySection';
import ContactSection from './sections/ContactSection';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  // Solar System Loader: always show on fresh page load (no sessionStorage suppression)
  const [isLoading, setIsLoading] = useState(true);

  // GRB Hero Video: track whether it has already played this session
  // so it doesn't replay when user navigates away and back
  const [heroVideoPlayed, setHeroVideoPlayed] = useState(() => {
    try {
      return sessionStorage.getItem('sid_hero_played') === 'true';
    } catch {
      return false;
    }
  });

  const location = useLocation();

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleHeroVideoPlayed = useCallback(() => {
    setHeroVideoPlayed(true);
    try {
      sessionStorage.setItem('sid_hero_played', 'true');
    } catch {}
  }, []);

  return (
    <>
      <ScrollToTop />

      {/* Solar System Loading Screen — always shown on fresh page load */}
      {isLoading && <SolarSystemLoader onComplete={handleLoadingComplete} />}

      {/* Particle Deep-Field Star Background */}
      <ParticleField particleCount={160} interactive={true} />

      {/* Navigation Bar */}
      <Navigation />

      {/* Route Views */}
      <main className="relative z-10 min-h-[calc(100vh-140px)]">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Home: Hero + Word Document Section 1 */}
            <Route
              path="/"
              element={
                <PageLayout>
                  <HeroSection
                    isLoaded={!isLoading}
                    heroVideoPlayed={heroVideoPlayed}
                    onHeroVideoPlayed={handleHeroVideoPlayed}
                  />
                  <HomeIntroSection />
                </PageLayout>
              }
            />

            {/* About & Academic Background: Word Document Section 2 */}
            <Route
              path="/about"
              element={
                <PageLayout className="pt-16">
                  <AboutSection />
                  <EducationSection />
                </PageLayout>
              }
            />

            {/* Research & Experience: Word Document Section 3 */}
            <Route
              path="/research"
              element={
                <PageLayout className="pt-16">
                  <ExperienceSection />
                </PageLayout>
              }
            />

            {/* Projects & Engineering: Word Document Section 4 */}
            <Route
              path="/projects"
              element={
                <PageLayout className="pt-16">
                  <ProjectsSection />
                </PageLayout>
              }
            />

            {/* Technical Skills: Word Document Section 5 */}
            <Route
              path="/skills"
              element={
                <PageLayout className="pt-16">
                  <SkillsSection />
                </PageLayout>
              }
            />

            {/* Continuous Learning (Workshops): Word Document Section 6 */}
            <Route
              path="/workshops"
              element={
                <PageLayout className="pt-16">
                  <WorkshopsSection />
                </PageLayout>
              }
            />

            {/* Community & Outreach: Word Document Section 7 */}
            <Route
              path="/community"
              element={
                <PageLayout className="pt-16">
                  <CommunitySection />
                </PageLayout>
              }
            />

            {/* Field Archives & Gallery */}
            <Route
              path="/gallery"
              element={
                <PageLayout className="pt-16">
                  <GallerySection />
                </PageLayout>
              }
            />

            {/* Transmission & Contact */}
            <Route
              path="/contact"
              element={
                <PageLayout className="pt-16">
                  <ContactSection />
                </PageLayout>
              }
            />

            {/* Fallback to Home */}
            <Route
              path="*"
              element={
                <PageLayout>
                  <HeroSection
                    isLoaded={!isLoading}
                    heroVideoPlayed={heroVideoPlayed}
                    onHeroVideoPlayed={handleHeroVideoPlayed}
                  />
                  <HomeIntroSection />
                </PageLayout>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Persistent Footer */}
      <Footer />
    </>
  );
}

export default App;
