import React, { useCallback }  from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Layout from '../../../layout/index'
import Search from '../../../compenents/search'
import ListResult from '../listoffres'
import { _offreAction } from '../../../redux/_actions/offre.action'
//The first page that the user sees

const SearchOffrePage = () => {
    const state = useSelector(state => state)

    const dispatch = useDispatch();


    const searchOffres = (char) => {

        dispatch(_offreAction.fullSearchOffres(char.trim()))
    }
    return (
        <Layout>

            <div className="w3-white w3-margin">
                <div className="w3-container w3-padding-16    text-white col 5">
                    <Search _placeholder="mot clé / entreprise" searchOffre={searchOffres} />

                </div>

                <ul className="w3-ul w3-hoverable w3-white">
                    {state.offres.offresSearchFull && < ListResult list={state.offres.offresSearchFull} />}

                </ul>

            </div>
        </Layout>
    )

}

export default SearchOffrePage


