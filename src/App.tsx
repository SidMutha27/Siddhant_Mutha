import { useState, useCallback, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import SolarSystemLoader from './components/SolarSystemLoader';
import ParticleField from './components/ParticleField';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PageLayout from './components/PageLayout';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import WorkshopsSection from './sections/WorkshopsSection';
import CommunitySection from './sections/CommunitySection';
import ContactSection from './sections/ContactSection';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <ScrollToTop />

      {/* Loading Screen on Initial Load */}
      {isLoading && <SolarSystemLoader onComplete={handleLoadingComplete} />}

      {/* Particle Deep-Field Star Background */}
      <ParticleField particleCount={160} interactive={true} />

      {/* Navigation Bar */}
      <Navigation />

      {/* Route Views */}
      <main className="relative z-10 min-h-[calc(100vh-140px)]">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Home: Hero + About Preview */}
            <Route
              path="/"
              element={
                <PageLayout>
                  <HeroSection isLoaded={!isLoading} />
                  <AboutSection />
                </PageLayout>
              }
            />

            {/* About & Academic Background */}
            <Route
              path="/about"
              element={
                <PageLayout className="pt-16">
                  <AboutSection />
                  <EducationSection />
                </PageLayout>
              }
            />

            {/* Research & Experience */}
            <Route
              path="/research"
              element={
                <PageLayout className="pt-16">
                  <ExperienceSection />
                </PageLayout>
              }
            />

            {/* Projects & Engineering */}
            <Route
              path="/projects"
              element={
                <PageLayout className="pt-16">
                  <ProjectsSection />
                </PageLayout>
              }
            />

            {/* Technical Skills & Workshops */}
            <Route
              path="/skills"
              element={
                <PageLayout className="pt-16">
                  <SkillsSection />
                  <WorkshopsSection />
                </PageLayout>
              }
            />

            {/* Community & Leadership */}
            <Route
              path="/community"
              element={
                <PageLayout className="pt-16">
                  <CommunitySection />
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
                  <HeroSection isLoaded={!isLoading} />
                  <AboutSection />
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
