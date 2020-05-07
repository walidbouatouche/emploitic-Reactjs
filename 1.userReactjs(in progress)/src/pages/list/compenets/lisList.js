import React from'react'
import { faMapMarkerAlt, faClock, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"

const Listlist=({ list })=> {

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


  export default  Listlist;