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
import AnotherImages from './AnotherImages'
import ElectronicsSection from './ElectronicsSection'
import Ac from './Ac'
import Value from './Value'
import Deals from './Deals'
import Footer from './Footer'
import Lastfooter from './Lastfooter'

const Layout = () => {
  return (
    <div>
        <Navbar/>
      <FirstCarousal/>
      <br/>

        <Carousal/>
        <AnotherImage/>
        <NewCarousal/>
        <Offer/>
        <Customer/>
        <Croud/>
        <br/>
        <AnotherImages/>

        <Electronics/>
        <Ac/>
        <Value/>
        <Deals/>
        <Ac/>
        <Footer/>
        <Lastfooter/>

    </div>
  )
}

export default Layout
