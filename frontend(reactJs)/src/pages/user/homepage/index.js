import React from 'react'

import Layout from '../../../layout/index'
import categorieoffre from '../../../static/cat.json'
import List from './compenents/listhome'

//The first page that the user sees

const Home = () => {
    return (
        <Layout>

            <div className="w3-white w3-margin">
                <div className="w3-container w3-padding-16  w3-orange text-white">
                    <span className="w3-padding-16  w3-orange w3-text-white">Offres d'emploi par fonction</span>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">

                    <List list={categorieoffre} />
                </ul>
            </div>

        </Layout>
    )

}

export default Home


