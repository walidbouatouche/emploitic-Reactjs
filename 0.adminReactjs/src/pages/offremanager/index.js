import React, { useEffect ,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Layout from '../../layout/index'
import Spinner from '../../compenents/spinner'
import Panel from '../../compenents/panel'
import { Alerts } from '../../compenents/alerts'
import OffreList from './compenents/offrelist';
import Search from '../../compenents/search'
import More from './compenents/moreoffres';
import Select from '../../compenents/select'
import { _offreAction } from '../../redux/_actions/offre.action';
import Button from '../../compenents/button'
import categorieoffre from '../../static/cat.json'
const Offremanager = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch();
    const [limit , setLimit]=useState(4)

    useEffect(() => {
     getMoreOffre(limit)

    }, [])

    function getMoreOffre(limit){
 
        dispatch(_offreAction.getMoreOffre(limit))
        setLimit(limit+4);
    }

    function getAllOffres() {
        dispatch(_offreAction.getAllOffres());
    }
    function removeOffre(_id) {
        dispatch(_offreAction.removeOffre(_id))

    }
    function searchOffre(char) {
        dispatch(_offreAction.getAllOffres(char))
        setLimit(4);

    }
    function filterOffre(id) {
        dispatch(_offreAction.getCatById(id))
        setLimit(4);


    }
    
    return (<>
        <Layout>
        <div className="w3-col m8">
        {state.offres.loading && <Spinner />}
                {state.offres.error && <Alerts.AlertDanger text={state.offres.error} />}
                {state.offres.listoffres && <OffreList _removeOffre={removeOffre} offrelist={state.offres.listoffres} />}
                {state.offres.succes &&
                    <Alerts.Alertsuccess text={"Success!"} />
                }
                   <More  _moreoffre={getMoreOffre}  limit={limit}/>
</div>
            <div className="w3-col m4 ">
                <Panel title="filter">
 
                
                <Search searchOffre={searchOffre} _placeholder={'search offre'} />
                <Select filterOffre={filterOffre} _title={'Choose your offre'} _data={categorieoffre} />
                <Button title="Rest" _onClick={()=>getAllOffres(4)} /><br/>
 
                </Panel>
             
         
            </div>
         
        </Layout>

    </>)
}


export default Offremanager