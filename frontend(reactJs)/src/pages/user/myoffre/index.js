import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { _offreAction } from "../../../redux/_actions/offre.action";
import { faMapMarkerAlt, faClock, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ListResult from '../listoffres'

import { Link } from "react-router-dom"
import Layout from '../../../layout/'
import Auth from '../../../_helpers/auth'

/*

 * my offres : A page showing the offers  postuled by user  
 * only for users have role 'user'
 
 */
const Myoffres = () => {


  const state = useSelector(state => state);
  const dispatch = useDispatch()
  useEffect(() => {

    // we need user id for target only the offres of  logged user

    dispatch(_offreAction.getMyOffre(Auth.getUserId()))

  }, [])

  return (

    <Layout>
      <div className="w3-white w3-margin">
        <div className="w3-container w3-padding  w3-orange w3-text-white">
          <span>Offres  postlu  By You</span>
        </div>
        <ul className="w3-ul w3-hoverable w3-white">


          {state.offres.offres && <ListResult  list={state.offres.offres} />}

        </ul>
      </div>
    </Layout>
  )

 
}

export default Myoffres