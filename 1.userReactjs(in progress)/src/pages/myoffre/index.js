import React ,{useEffect}from "react";
import { connect, useSelector } from "react-redux";
import { getMyoffres} from "../../redux/offre/offresAction";
import { faMapMarkerAlt, faClock, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"
import Layout from '../../layout/index'

const Myoffres= ({getMyoffres}) => {

    const state = useSelector(state => state);
    useEffect(() => {
        getMyoffres()

      }, [])



  return (
    <>

    <Layout>

      <div className="w3-white w3-margin">
        <div className="w3-container w3-padding  w3-orange text-white">
          <h4>Offres d'emploi par fonction</h4>
        </div>
        <ul className="w3-ul w3-hoverable w3-white">
          {(state.offre.offres != null) ?

            <List list={state.offre.offres} /> : "no Data"}

        </ul>
      </div>


      <div class="w3-bar">

        <a href="#" className="w3-button w3-green w3-margin">1</a>
        <a href="#" className="w3-button">2</a>
        <a href="#" className="w3-button">3</a>
        <a href="#" className="w3-button">4</a>

      </div>
    </Layout>

  </>
  )

  function List({ list }) {

    return (
      list.map((item => (<div>
  
        <li class="w3-padding-16 w3-border-light-gray w3-border-top">
  
          <Link to={'/offreviewer/' + item._id}>
  
  
            <img src={item.imguri} alt="Image" class="w3-left w3-margin-right" style={{ width: '50px' }} />
            <span className="w3-large  w3-text-black"> {item.titre}</span>
            <br />
            <span>{item.entreprise}</span>
            <div className="w3-row">
              <div className="w3-col  11 ">
                <div className="w3-row">
                  <br />
                  <div className="w3-col  m3  ">
                    <p className="w3-text-gray">  <span className="w3-margin"><FontAwesomeIcon icon={faMapMarkerAlt} /></span> {item.location} </p>
                  </div>
                  <div class="w3-col  m3">
                    <p className="w3-text-gray">
                      <span className="w3-margin"><FontAwesomeIcon icon={faClock} /></span>
                      {item.date_d}</p>
                  </div>
                  <div className="w3-col  m6">
                    <p className="w3-text-gray"> <span className="w3-margin"><FontAwesomeIcon icon={faBookmark} /></span>{item.type}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>  </li>
  
  
      </div>))))
  }
 
    }

export default connect(
  null,
  { getMyoffres }
)(Myoffres);