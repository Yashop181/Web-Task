import React from 'react'
import Navbar from './Navbar'
import AnotherImage from './AnotherImage'
import Electronics from './Electronics'
import FirstCarousal from './FirstCarousal'
import Offer from './Offer'
import Customer from './Customer'
import Croud from './Croud'
import Ac from './Ac'
import Value from './Value'
import Deals from './Deals'
import Footer from './Footer'
import Lastfooter from './Lastfooter'

import Newfiles from './Newfiles'
import './Layout.css'


const Layout = () => {
  return (
    <div >
        <Navbar/>
        <br/>
        <FirstCarousal/>
        <div className='all-mine'>
        <Offer/>
        <Customer/>
        <br/>
        <Croud/>
        <br/>
        <AnotherImage/>
        <Electronics/>
        <Ac/>
        <Value/>
        <Deals/>
        <Ac/>
        <br/>
        <Footer/>
        <Lastfooter/>
        {/* <Newfile/> */}
        <Newfiles/>

        
      </div>
    </div>
  )
}

export default Layout
