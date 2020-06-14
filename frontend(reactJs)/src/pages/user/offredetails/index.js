import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { _offreAction } from '../../../redux/_actions/offre.action';

import Layout from '../../../layout/index'
import Spinner from '../../../compenents/spinner'
import { Alerts } from '../../../compenents/alerts'
import OffreDetail from './compenets/offrevwier'

import Auth from '../../../_helpers/auth'

// page show a content of offre 
const Offredetail = ({ match }) => {


    const state = useSelector(state => state)
    const { id } = match.params;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(_offreAction.getOffreById(id))

    }, [])

    const postuler = (id) => {
          
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
        </Layout>

    )
}




export default Offredetail






