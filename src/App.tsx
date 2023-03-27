import {BrowserRouter} from 'react-router-dom';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Navbar } from './components';

// import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from '@/components';

const AboutLazy = React.lazy(() => import('./components/About'));
const ExperienceLazy = React.lazy(() => import('./components/Experience'));
const TechLazy = React.lazy(() => import('./components/Tech'));
const FeedbacksLazy = React.lazy(() => import('./components/Feedbacks'));
const ContactLazy = React.lazy(() => import('./components/Contact'));
const StarsLazy = React.lazy(() => import('./components/canvas/Stars'));
const HeroLazy = React.lazy(() => import('./components/Hero'));

const App = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    //todo: consider turn it into a hook
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches as boolean);
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Suspense>
            <HeroLazy isMobile={isMobile} />
          </Suspense>
        </div>
        <Suspense>
          <AboutLazy />
        </Suspense>
        <Suspense>
          <ExperienceLazy />
        </Suspense>
        <Suspense>
          <TechLazy />
        </Suspense>
        {/* <Works /> */}
        <Suspense>
          <FeedbacksLazy />
        </Suspense>
        <div className='relative z-0'>
          <Suspense>
            <ContactLazy />
            <StarsLazy />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;