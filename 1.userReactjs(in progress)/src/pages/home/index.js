import React, { Component } from 'react'
import Layout from '../../layout/index'
import Offreslist from '../../static/cat.json'
import List from'./compenets/listhome'
const Home =()=>{
    return (<>

      <Layout>

        <div className="w3-white w3-margin">
          <div className="w3-container w3-padding-32  w3-orange text-white">
            <h4>Offres d'emploi par fonction</h4>
          </div>
          <ul className="w3-ul w3-hoverable w3-white">
            <List list={Offreslist} />
          </ul>
        </div>
        <hr />


      </Layout>

    </>)
  




}

export default Home