import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Layout from '../../../layout/index'
import Spinner from '../../../compenents/spinner'
import Panel from '../../../compenents/panel'
import { Alerts } from '../../../compenents/alerts'
import OffreList from './compenents/offrelist';
import Search from '../../../compenents/search'
import Select from '../../../compenents/select'
import Button from '../../../compenents/button'

import { _offreAction } from '../../../redux/_actions/offre.action';
import { _userAction } from '../../../redux/_actions/user.action';


import categorieoffre from '../../../static/cat.json'

const incrementByLimit = 4; //  that mean  ++4 (*_*)

{
    /*
     many function name with underscore  
    just for make the code readable 

    */
}
const Offremanager = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(incrementByLimit)


    useEffect(() => {
        /*  
          *  limit number of topics it will increment +4 
           (you can use other ) when adminclick showmore


            */
        getMoreOffre(limit)
        dispatch(_offreAction.getOffreNumber())

    }, [])

    function getMoreOffre(limit) {

        if (limit >= (state.offres.nbr + incrementByLimit)) {
            return false;
        }
        dispatch(_offreAction.getMoreOffre(limit))
        setLimit(limit + incrementByLimit);


    }


    function removeOffre(_id) {
        dispatch(_offreAction.removeOffre(_id))
        getMoreOffre(incrementByLimit)
    }
    function searchOffre(char) {
        //  char: text query get from child
        dispatch(_offreAction.searchOffres(char.trim()))


    }
    function filterOffre(id) {
        dispatch(_offreAction.getCatById(id))

    }
    function addOffre(data) {

        // deleting property we dont need to add
        delete data._id
        dispatch(_offreAction.addOffre(data))
        getMoreOffre(incrementByLimit)


    }
    function editOffre(data) {
        dispatch(_offreAction.updateOffre(data))
        getMoreOffre(incrementByLimit)


    }

    function getUsersByOffre(id) {
        // get offre postuler by user
        dispatch(_userAction.getUsersByOffre(id))

    }
    return (<>
        <Layout>

            <div className="w3-col m8 w3-padding">
                {state.offres.loading && <Spinner />}
                {state.offres.error && <Alerts.AlertDanger text={state.offres.error} />}
                {state.offres.listoffres &&

                    <OffreList users={state.user.usersByOffre} getUsersByOffre={getUsersByOffre} addOffre={addOffre} editOffre={editOffre} _removeOffre={removeOffre} offrelist={state.offres.listoffres} />}
                {state.offres.succes &&
                    <Alerts.Alertsuccess text={"Success!"} />
                }
             </div>
            <div className="w3-col m4 ">
                <Panel title="Recherche general">
                    <Search searchOffre={searchOffre} _placeholder={'search offre'} />
                     {<Button title="Rest" onClick={() => getMoreOffre(4)} />}
                    <p className="w3-text-black">
                        {state.offres.nbr && `  Nbr of Topics :${state.offres.nbr}`}

                    </p>
                </Panel>

            </div>
        </Layout>

    </>)
}


export default Offremanager