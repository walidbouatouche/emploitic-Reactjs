import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Layout from '../../layout/index'
import Spinner from '../../compenents/spinner'
import { Alerts } from '../../compenents/alerts'
import OffreList from "./compenents/offrelist";
import Search from "./compenents/search";
import Pagination from "./compenents/pagination";

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
    function searchOffre(char) {
        
        dispatch(_offreAction.getAllOffres(char))

    }
    return (<>
        <Layout>

            <div className="w3-padding">
                <Search searchOffre={searchOffre}></Search>
                {state.offres.loading && <Spinner />}
                {state.offres.error && <Alerts.AlertDanger text={state.offres.error} />}
                {state.offres.listoffres && <OffreList _removeOffre={removeOffre} offrelist={state.offres.listoffres} />}
                {state.offres.succes &&
                    <Alerts.Alertsuccess text={"Success!"} />
                }
            </div>
            <Pagination></Pagination>
        </Layout>

    </>)
}


export default Offremanager