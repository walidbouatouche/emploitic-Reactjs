import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { _offreAction } from "../../../redux/_actions/offre.action";
import { faMapMarkerAlt, faClock, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from "react-router-dom"
import Layout from '../../../layout/'
import Auth from '../../../_helpers/auth'
import { UserAuth } from '../../../_helpers/withauth'

//A page showing the offers you have requested
//صفحة تظهر العروض التي طلبتها

const Myoffres = () => {


  const state = useSelector(state => state);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(_offreAction.getMyOffre(Auth.getUserId()))

  }, [])

  return (

    <Layout>
      <div className="w3-white w3-margin">
        <div className="w3-container w3-padding  w3-orange text-white">
          <h4>Offres d'emploi par fonction</h4>
        </div>
        <ul className="w3-ul w3-hoverable w3-white">


          {state.offres.offres && <List list={state.offres.offres} />}

        </ul>
      </div>
    </Layout>
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
          </Link>
        </li>
      </div>))))
  }
}

export default UserAuth(Myoffres);