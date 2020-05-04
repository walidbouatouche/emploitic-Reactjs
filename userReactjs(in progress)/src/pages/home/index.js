import React, { Component } from 'react'
import Layout from '../../layout/index'
import Offreslist from '../../static/cat.json'
import { Link } from "react-router-dom"

function List({ list }) {

  return (
    list.map((item => (<div>

      <li className="w3-padding-16">
        <Link to={'list/' + item.id}>
          <img src={item.imguri} alt="Image" class="w3-left w3-margin-right" style={{ width: '50px' }} />
          <span className="w3-large w3-text-black"> {item.title}</span>
          <br />
          <span className="w3-text-gray">{item.tags}</span>
        </Link>
      </li>


    </div>))))
}
class Home extends Component {


  componentDidMount() {
    console.log(Offreslist)
  }



  render() {
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




}

export default Home