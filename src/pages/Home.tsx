import { useMediaQuery } from '@/hooks'
import { AppLayout } from '@/layouts'
import React, { Suspense } from 'react'

const Home = () => {
  const AboutLazy = React.lazy(() => import('../components/About'))
  const ExperienceLazy = React.lazy(() => import('../components/Experience'))
  const TechLazy = React.lazy(() => import('../components/Tech'))
  const FeedbacksLazy = React.lazy(() => import('../components/Feedbacks'))
  const ContactLazy = React.lazy(() => import('../components/Contact'))
  const StarsLazy = React.lazy(() => import('../components/canvas/Stars'))
  const HeroLazy = React.lazy(() => import('../components/Hero'))

  const { isMobile } = useMediaQuery()

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
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
      <Suspense>{/* <TechLazy /> */}</Suspense>
      {/* <Works /> */}
      <Suspense>
        <FeedbacksLazy />
      </Suspense>
      <div className="relative z-0">
        <Suspense>
          <ContactLazy />
          <StarsLazy />
        </Suspense>
      </div>
    </div>
  )
}

export default AppLayout(Home)
