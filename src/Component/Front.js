import React from 'react'
import Navbar from './Navbar'
import Intro from './Intro'
import About from './About'
import Qualifications from './Qualifications'
import Engagement from './Engagement'
import Review from './Review'

const Front = () => {
  return (
    <div>
        <Navbar/>
        <Intro/>
        <About/>
        <Qualifications/>
        <Engagement/>
        <Review/>
    </div>
  )
}

export default Front