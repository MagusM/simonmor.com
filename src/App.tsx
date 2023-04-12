import {BrowserRouter} from 'react-router-dom';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Navbar } from './components';
import { useHandleKeyPressed, useMediaQuery } from './hooks';

// import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from '@/components';

const AboutLazy = React.lazy(() => import('./components/About'));
const ExperienceLazy = React.lazy(() => import('./components/Experience'));
const TechLazy = React.lazy(() => import('./components/Tech'));
const FeedbacksLazy = React.lazy(() => import('./components/Feedbacks'));
const ContactLazy = React.lazy(() => import('./components/Contact'));
const StarsLazy = React.lazy(() => import('./components/canvas/Stars'));
const HeroLazy = React.lazy(() => import('./components/Hero'));

const App = () => {
  const { isMobile } = useMediaQuery();
  
  useEffect(() => {
    return () => {
      console.log('%cHey There...!', 'color: red; font-weight: bold; font-size: 24px; text-decoration: underline cyan;');
      console.log('%ccaught you snooping around!', 'color: red; font-weight: bold; font-size: 14px');
      console.log('%cchecking my network do you? see some of the error thrown!?', 'color: red; font-weight: bold; font-size: 14px');
      console.log('%c$: rm -rf /', 'color: green; font-weight: bold; font-size: 14px');
      console.log('%cit didnnt work ah!?', 'color: red; font-weight: bold; font-size: 14px');
      console.log('%csudo!!', 'color: green; font-weight: bold; font-size: 14px');
      console.log('%cyou still here...!', 'color: red; font-weight: bold; font-size: 14px');
      console.log('%cEnjoy then.', 'color: red; font-weight: bold; font-size: 14px');
      console.log('%cif you need any help just contact me!', 'color: cyan; font-weight: bold; font-size: 14px');
    }
  }, []);

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
            {/* <TechLazy /> */}
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