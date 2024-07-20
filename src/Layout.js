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
        <h1>hi</h1>
        <AnotherImages/>

        <Electronics/>
        <Ac/>
        <Value/>


    </div>
  )
}

export default Layout
