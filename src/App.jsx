import React, { Suspense, lazy } from 'react';
import { useLenis } from './hooks/useLenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionSkeleton from './components/SectionSkeleton';

const JourneyReveal = lazy(() => import('./components/JourneyReveal'));
const FeatureStory = lazy(() => import('./components/FeatureStory'));
const ProductPreview = lazy(() => import('./components/ProductPreview'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const DriftWall = lazy(() => import('./components/DriftWall'));
const CinematicBanner = lazy(() => import('./components/CinematicBanner'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  useLenis();

  return (
    <div className="min-h-screen bg-background dark:bg-[#0a0a0a] text-primary dark:text-[#f3f4f6] selection:bg-accent selection:text-white bg-grid-pattern relative transition-colors duration-500">
      <div className="pointer-events-none fixed inset-0 z-50 border-[12px] md:border-[24px] border-background dark:border-[#0a0a0a] mix-blend-normal transition-colors duration-500" />
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Suspense fallback={<SectionSkeleton />}>
          <JourneyReveal />
          <FeatureStory />
          <ProductPreview />
          <HowItWorks />
          <DriftWall />
          <CinematicBanner />
          <FinalCTA />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-64 bg-background dark:bg-[#0a0a0a] transition-colors duration-500" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
