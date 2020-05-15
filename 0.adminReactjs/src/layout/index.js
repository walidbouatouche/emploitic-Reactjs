import React, { Component } from 'react'
import Menu from '../compenents/navigation'
import Rightside from '../compenents/rightside'
import Footer from '../compenents/footer'
//The main layout that appears on all pages
//التخطيط الرئيسي الذي يظهر في جميع الصفحات
const Layout = (props) => {
  return (
    <>
      <Menu />
      <div className="w3-row">
        <div className="w3-col   w3-margin-top">
          {props.children}
        </div>
        {/* <Rightside /> */}
      </div>
      <Footer />
    </>
  );

}

export default Layout