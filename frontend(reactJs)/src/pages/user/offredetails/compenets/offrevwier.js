import React from 'react'
import { faMapMarkerAlt, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Offrevwier = ({ list, postulerOffre }) => {

    const _postulerOffre = (id) => {
        postulerOffre(id)
    }
    return (
        list.map((item => (<div key={item._id}>
            <li className="w3-padding-16 w3-border-light-gray w3-border-top">
                <button onClick={() => _postulerOffre(item._id)} className="w3-button w3-orange w3-text-white w3-right">Postuler</button>
                <img src={item.imguri} alt="Image" className="w3-left w3-margin-right" style={{ width: '50px' }} />
                <span className="w3-large"> {item.titre}</span>
                <br />
                <span>{item.entreprise}</span>
                <div className="w3-row">
                    <div className="w3-col  m11 ">
                        <div className="w3-row">
                            <br />
                            <div className="w3-col  m8">
                                <span className="w3-margin w3-text-gray"></span>
                            </div>
                            <br />
                            <br />
                            <div className="w3-col  m3  ">
                                <p className="w3-text-gray">  <span className="w3-margin"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>{item.location}</p>
                            </div>
                            <div className="w3-col  m5">
                                <p className="w3-text-gray">
                                    <span className="w3-margin">Date d'expiration: </span>
                                    {item.date_f}</p>
                            </div>
                            <div className="w3-col  m4">
                                <p className="w3-text-gray"> <span className="w3-margin"><FontAwesomeIcon icon={faBookmark} /></span>{item.type}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <div className="w3-margin-top w3-padding w3-white  ">
                <h4 className="w3-margin">Description d 'offre:</h4>
                {item.description}
            </div>
        </div>))))
}


export default Offrevwier