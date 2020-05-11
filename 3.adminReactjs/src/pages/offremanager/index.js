import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Layout from '../../layout/index'
import Spinner from '../../compenents/spinner'
import AlertDanger from '../../compenents/alertdanger'
import OffreList from "./compenents/offrelist";

import { _offreAction } from '../../redux/_actions/offre.action';

const Offremanager = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(_offreAction.getAllOffres());
        console.log(state);
    }, [])

    return (<>
        <Layout>
            <div className="w3-padding">
                {state.offres.loading && <Spinner />}
                {state.offres.error && <AlertDanger text={state.offres.error} />}
                {state.offres.listoffres && <OffreList offrelist={state.offres.listoffres} />
                }
            </div>
        </Layout>

    </>)
}


export default Offremanager