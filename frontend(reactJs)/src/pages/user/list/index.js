import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { _offreAction } from '../../../redux/_actions/offre.action';

import Layout from '../../../layout/index'
import Listbycat from '../listoffres'
import Spinner from '../../../compenents/spinner'
import { Alerts } from '../../../compenents/alerts'
import Pagination from '../../../compenents/pagination'

// this page show a list of offres by categeries

const limit = 2; // globale limit  choose your limit
const Listpage = ({ match }) => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()

    //Get   Id of categrie from the home page
    const { id } = match.params;

    useEffect(() => {
        /* if you want get all 
         dispatch(_offreAction.getCatById(id))
                        */

        // get a numbers of offres By categries we use it for pagination
        dispatch(_offreAction.getNumberOffresByCat(id))


        // first load of page we get begin from the first in database so skip=0
        skip(0)

    }, [])

    const skip = (skipValue) => {

        // in short skip mean : start at postion (skipValue)
        dispatch(_offreAction.getOffreByCatWithPagination(skipValue, id, limit))

    }

    return (
        <Layout>
            <div className="w3-white w3-margin">

                <div className="w3-container w3-padding  w3-orange w3-text-white">
                    <span>Offres </span>
                </div>

                {
                    /*
                    We use  &&(and) very popular  for react devlopper
                     when the first true it will show the second
                     
                     */
                }

                <ul className="w3-ul w3-hoverable w3-white">
                    {state.offres.loading && <Spinner />}
                    {state.offres.offreByPgn &&
                        <Listbycat list={state.offres.offreByPgn} />}

                </ul>
            </div>
            {
                // skip  use for pagination 
            }
          {state.offres.nbrPgn > limit &&
                <Pagination
                    _count={state.offres.nbrPgn}
                    limit={limit}
                    _skip={skip}
                />}


        </Layout>

    )
}







export default Listpage