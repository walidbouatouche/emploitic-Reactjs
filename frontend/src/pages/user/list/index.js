import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { _offreAction } from '../../../redux/_actions/offre.action';

import Layout from '../../../layout/index'
import Listbycat from './compenents/listbycat'
import Spinner from '../../../compenents/spinner'
import { Alerts } from '../../../compenents/alerts'



const Listpage = ({ match }) => {

    const state = useSelector(state => state)

    const dispatch = useDispatch()

    //Get an ID from the home page
    const { id } = match.params;

    useEffect(() => {
        dispatch(_offreAction.getCatById(id))

    }, [])



    return (
        <Layout>
            <div className="w3-white w3-margin">
                <div className="w3-container w3-padding  w3-orange text-white">
                    <h4>Offres d'emploi par fonction</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    {state.offres.loading && <Spinner />}
                    {state.offres.error && <Alerts.AlertDanger text={state.offres.error} />}
                    {state.offres.listoffres &&
                        <Listbycat list={state.offres.listoffres} />}
                    {state.offres.succes &&
                        <Alerts.Alertsuccess text={"Success!"} />
                    }


                </ul>
            </div>
        </Layout>

    )
}







export default Listpage