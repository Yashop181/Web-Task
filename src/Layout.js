import React from 'react'
import Navbar from './Navbar'
import Carousal from './Carousal'
import AnotherImage from './AnotherImage'
import Electronics from './Electronics'
import NewCarousal from './NewCarousal'
import FirstCarousal from './FirstCarousal'
import Offer from './Offer'
import Customer from './Customer'
import Croud from './Croud'

const Layout = () => {
  return (
    <div>
        <Navbar/>
      <FirstCarousal/>
        <h1>hello</h1>
        <Carousal/>
        <AnotherImage/>
        <Electronics/>
        <NewCarousal/>
        <Offer/>
        <Customer/>
        {/* <Croud/> */}


    </div>
  )
}

export default Layout
