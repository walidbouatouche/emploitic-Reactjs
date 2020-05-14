import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Layout from '../../layout/index'
import Spinner from '../../compenents/spinner'
import { Alerts } from '../../compenents/alerts'
import OffreList from "./compenents/offrelist";

import { _offreAction } from '../../redux/_actions/offre.action';

const Offremanager = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(_offreAction.getAllOffres());

    }, [])
    function removeOffre(_id) {
        dispatch(_offreAction.removeOffre(_id))
      
    }
    return (<>
        <Layout>
            <div className="w3-padding">
                {state.offres.loading && <Spinner />}
                {state.offres.error && <Alerts.AlertDanger text={state.offres.error} />}
                {state.offres.listoffres && <OffreList _removeOffre={removeOffre} offrelist={state.offres.listoffres} />}
                {state.offres.succes &&
                    <Alerts.Alertsuccess text={"Success!"} />
                }
            </div>
        </Layout>

    </>)
}


export default Offremanager