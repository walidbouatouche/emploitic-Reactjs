import React from 'react'
import { faMapMarkerAlt, faClock, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"


// compenent show list of offres by categoreis
const Listlist = ({ list }) => {

    return (
        list.map((item => (<div key={item._id}>
            <li className=" w3-border w3-padding-16 w3-border-light-gray w3-border-top">
                <Link to={'/offreviewer/' + item._id}>
                    {item.imguri && <img src={item.imguri} alt="Image" className="w3-left w3-margin-right" style={{ width: '50px' }} />
                    }                    <span className="w3-large  w3-text-black"> {item.titre}</span>
                    <br />
                    <span>{item.entreprise}</span>
                    <div className="w3-row">
                        <div className="w3-col  11 ">
                            <div className="w3-row">
                                <br />
                                <div className="w3-col  m3  ">
                                    <p className="w3-text-gray">  <span className="w3-margin"><FontAwesomeIcon icon={faMapMarkerAlt} /></span> {item.location} </p>
                                </div>
                                <div className="w3-col  m3">
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


export default Listlist;