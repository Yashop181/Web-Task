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

import Ac from './Ac'
import Value from './Value'
import Deals from './Deals'
import Footer from './Footer'
import Lastfooter from './Lastfooter'
import './Layout.css'

const Layout = () => {
  return (
    <div>
        <Navbar/>

      <FirstCarousal/>
      <br/>
      <div className='all-mine'>
        
      <Offer/>
        
        <Customer/>
        <br/>
        <Croud/>
        <br/>
        <AnotherImage/>
        <Carousal/>
        <br/>
        <Ac/>
        <br/>
        <NewCarousal/>
        
        <br/>
 


        <Electronics/>
        <Value/>
        <Deals/>
        <Ac/>
        <br/>
        <Footer/>
        <Lastfooter/>

      </div>


    </div>
  )
}

export default Layout
