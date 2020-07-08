import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { _offreAction } from '../../../redux/_actions/offre.action';

import Layout from '../../../layout/index'
import Spinner from '../../../compenents/spinner'
import { Alerts } from '../../../compenents/alerts'
import OffreDetail from './compenets/offrevwier'

import Auth from '../../../_helpers/auth'
 
import ListSame from'../list/compenents/listbycat'
// page show a content of offre 
const Offredetail = ({ match }) => {


    const state = useSelector(state => state)
    const { id } = match.params;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(_offreAction.getOffreById(id))
        dispatch(_offreAction.getOffreSame(id))
 
    }, [id])

    const postuler = (id) => {
        if (!Auth.isAuth()) {
   alert(" You must login for postuler")
   return false ;
         }
        dispatch(_offreAction.postulerOffre(id, Auth.getUserId()))
    }

    return (
        <Layout>
            <div className=" w3-margin">
                <br />
                <ul className="w3-ul w3-hoverable w3-white">

                    {state.offres.error && <Alerts.AlertDanger text={state.offres.error} />}

                    {state.offres.succes &&
                        <Alerts.Alertsuccess text={"Success!"} />
                    }
                    {state.offres.offredetail &&
                        <OffreDetail postulerOffre={postuler} list={state.offres.offredetail} />}

                </ul>
         
            </div>
          
            <div className="w3-padding">
                <p className="w3-orange w3-text-white  w3-padding-16" style={{width:"50%"}}> Les candidats ayant postulé à cette offre ont également postulé à ces offres</p>
                <ul className="w3-ul w3-hoverable w3-white">
                {state.offres.offresSame  &&  <ListSame list={state.offres.offresSame}></ListSame>}
             </ul>
            </div>
        </Layout>

    )
}




export default Offredetail






