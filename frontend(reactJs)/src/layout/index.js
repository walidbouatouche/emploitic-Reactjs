import React, { Component } from 'react'
import Menu from '../compenents/navigation'
import Rightside from '../compenents/rightside'
import Footer from '../compenents/footer'
import { Helmet } from "react-helmet"
//The main layout that appears on all pages
const Layout = ({ children }) => {
  return (
    <div >
      <Helmet>
        <title>Emploitik</title>
      </Helmet>
      <Menu />
      <div className="w3-row">
        <div className="w3-col   w3-margin-top">
          {children}
        </div>
        {/* <Rightside /> */}
      </div>
      <Footer />
    </div>
  );

}

export default Layout