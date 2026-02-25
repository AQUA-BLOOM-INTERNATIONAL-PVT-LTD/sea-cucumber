import React from 'react'
import AboutUs from '../components/about/AboutUs'
import Founders from '../components/about/Founders'
import Certifications from '../components/about/Certifications'
import CallToAction from '../components/about/CallToAction'

const About = () => {
  return (
    <div className='bg-[#F5F7FB]'>
      <AboutUs/>
      <Founders/>
      <Certifications/>
      <CallToAction/>
    </div>
  )
}

export default About