import React from 'react'
import Menu from '../compenets/navigation'
import Rightside from '../compenets/rightside'
import Footer from '../compenets/footer'
import { Helmet } from "react-helmet"
//The main layout that appears on all pages
//التخطيط الرئيسي الذي يظهر في جميع الصفحات
const Layout = (props) => {
  return (
    <>
    <Helmet><title>EMPLOITIK</title></Helmet>
      <Menu />
      <div className="w3-row">
        <div className="w3-col  l9 w3-margin-top">
          {props.children}
        </div>
        <Rightside />
      </div>
      <Footer />
    </>
  );

}

export default Layout