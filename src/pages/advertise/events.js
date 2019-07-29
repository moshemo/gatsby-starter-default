import React from 'react'

import { Featured, FaqSection as FAQ, Hero } from 'Pages/Advertise/Options'

import InnerLayout from 'Layouts/inner'

const Events = () => (
  <InnerLayout>
    <Hero />
    <Featured />
    <FAQ />
  </InnerLayout>
)

export default Events
