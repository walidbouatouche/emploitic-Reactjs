import React ,{useEffect}from 'react'
import {_offreAction} from'../../redux/_actions/offre.action';
import {useSelector,useDispatch } from'react-redux'
 const Offremanager = () => {
    const state=useSelector(state=>state)
    const dispatch= useDispatch();
    useEffect(()=>{
     dispatch(_offreAction.getAllOffres());
    },[])
    return (<div>
{state.offres.loading && <p>Loading..</p>}

    {state.offres.error && <p>Errer:{state.offres.error}</p>}

    </div>)
}


export default Offremanager