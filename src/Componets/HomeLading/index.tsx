import React from 'react'
import About from '../AboutUs'
import CallToAction from '../CallToAction'
import Clients from '../Clients'
import Cantact from '../Contact'
import FAQ from '../FAQ'
import Portfolio from '../Portfolio'
import Pricing from '../Pricing'
import RecentBlogPosts from '../RecentBlogPosts'
import Services from '../Services'
import Stats from '../Statistics'
import Team from '../Team'
import Testimonials from '../Testimonials'

const HomeLanding = () => {
  return (
    <main>
     <About />
        <Clients />
        <Stats />
        <CallToAction />
        <Services />
        <Testimonials />
        <Portfolio />
        <Team />
        <Pricing />
        <FAQ />
        <RecentBlogPosts />
        <Cantact />
    </main>
  )
}

export default HomeLanding