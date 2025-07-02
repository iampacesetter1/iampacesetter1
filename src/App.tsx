import React, { Suspense, lazy } from 'react';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load components to improve initial load time
const Hero = lazy(() => import('./components/Hero'));
const Features = lazy(() => import('./components/Features'));
const TechSpecs = lazy(() => import('./components/TechSpecs'));
const SecurityDemo = lazy(() => import('./components/SecurityDemo'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
        <Features />
        <TechSpecs />
        <SecurityDemo />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;