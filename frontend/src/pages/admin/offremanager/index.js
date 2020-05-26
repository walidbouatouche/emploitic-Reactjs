import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Layout from '../../../layout/index'
import Spinner from '../../../compenents/spinner'
import Panel from '../../../compenents/panel'
import { Alerts } from '../../../compenents/alerts'
import OffreList from './compenents/offrelist';
import Search from '../../../compenents/search'
import More from './compenents/moreoffres';
import Select from '../../../compenents/select'
import { _offreAction } from '../../../redux/_actions/offre.action';
import { _userAction } from '../../../redux/_actions/user.action';

import Button from '../../../compenents/button'
import categorieoffre from '../../../static/cat.json'

 {
    //  i wirte  many function name with underscore  just for make the code readable
}
const Offremanager = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(4)

    useEffect(() => {
        /*  
          *  limit number of topics it will increment +4  when admin
            click showmre
           * next time i will use  pagination
            */
        getMoreOffre(limit)

    }, [])

    function getMoreOffre(limit) {

        dispatch(_offreAction.getMoreOffre(limit))
        setLimit(limit + 4);
    }


    function removeOffre(_id) {
        dispatch(_offreAction.removeOffre(_id))

    }
    function searchOffre(char) {
        //  char: text query get from child
        dispatch(_offreAction.searchOffres(char.trim()))
        setLimit(4);

    }
    function filterOffre(id) {
        dispatch(_offreAction.getCatById(id))
        setLimit(4);

    }
    function addOffre(data) {

        // deleting property we dont need to add
        delete data._id
        dispatch(_offreAction.addOffre(data))

    }
    function editOffre(data) {
        dispatch(_offreAction.updateOffre(data))

    }
    function editOffre(data) {
        
        dispatch(_offreAction.updateOffre(data))

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
                    // state.offres.usersByOffre
                    <OffreList users={state.user.usersByOffre} getUsersByOffre={getUsersByOffre} addOffre={addOffre} editOffre={editOffre} _removeOffre={removeOffre} offrelist={state.offres.listoffres} />}
                {state.offres.succes &&
                    <Alerts.Alertsuccess text={"Success!"} />
                }
                <More _moreOffre={getMoreOffre} limit={limit} />
            </div>
            <div className="w3-col m4 ">
                <Panel title="filter">

                    <Search searchOffre={searchOffre} _placeholder={'search offre'} />
                    <Select filterOffre={filterOffre} _title={'Choose your offre'} _data={categorieoffre} />
                    <Button title="Rest" onClick={() => getMoreOffre(4)} /><br />
                </Panel>


            </div>

        </Layout>

    </>)
}


export default Offremanager