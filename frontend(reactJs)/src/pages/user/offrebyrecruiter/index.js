import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ListResult from '../list/compenents/listbycat'

import { _offreAction } from '../../../redux/_actions/offre.action'

import Layout from '../../../layout/index'


const OffresByRecruiter = ({ match }) => {
    // get offre Byrecruiter ***
    const state = useSelector(state => state)
    const { id } = match.params;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(_offreAction.getOffresByRecruiter(id))


    }, [])


    return (

        <Layout>

            <div className="w3-white w3-margin">
                <div className="w3-container w3-padding  w3-orange text-white">
                    <h4>        {state.offres.OffresByR && state.offres.OffresByR[0].entreprise}
                    </h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    {state.offres.OffresByR && < ListResult list={state.offres.OffresByR} />}

                </ul>

            </div>
        </Layout>
    )
}

export default OffresByRecruiter