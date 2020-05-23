import React from 'react'
import Layout from '../../../layout/index'
import categorieoffre from '../../../static/cat.json'
import List from './compenets/listhome'
import { UserAuth } from '../../../_helpers/withauth'
const Home = () => {
    return (
        <Layout>
            <div className="w3-white w3-margin">
                <div className="w3-container w3-padding-32  w3-orange text-white">
                    <h4>Offres d'emploi par fonction</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">

                    <List list={categorieoffre} />
                </ul>
            </div>

        </Layout>
    )





}

export default UserAuth(Home)


