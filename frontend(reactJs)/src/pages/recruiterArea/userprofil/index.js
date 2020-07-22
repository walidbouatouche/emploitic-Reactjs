import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { _userAction } from '../../../redux/_actions/user.action'
import Spinner from '../../../compenents/spinner'
import Panel from '../../../compenents/panel'
import Layout from '../../../layout'

const UserInfo = ({ match }) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch();
    const { id: userId } = match.params;

    useEffect(() => {
        dispatch(_userAction.getUserByR(userId))

    }, [])

    const openCV = (link) => {
        window.open(link)
    }


    return (<div >
        <Layout>
             {state.user.loading && <Spinner />}
            <div className="w3-col m4 ">
                <Panel title=" User infos">
                    {
                        /*   
                         * [0] the data comme as array  with 1 object 
                         * for target the properties we must use target by array-like
                        */
                        state.user.userByR && (
                            <div className=" w3-text-black  " >
                                <div>
                                    Nom:  {
                                        state.user.userByR[0].nom
                                    }

                                </div>
                                <div>
                                    Prenom: {
                                
                                         state.user.userByR[0].prenom
                                    }

                                </div>
                                <div>
                                    Adresse :  {
                                        state.user.userByR[0].adresse
                                    }
                                </div>
                                <div>
                                    Phone :  {
                                        state.user.userByR[0].phone
                                    }

                                </div>
                                <br />
                                <button onClick={() => openCV(state.user.userByR[0]._cv_link)} className="w3-button w3-padding w3-orange">
                                    CV
                            </button>
                            </div>
                        )
                    }
                </Panel>

            </div>
            <div className="w3-col m6 ">

                {state.user.userByR && (
                    <div>
                        <Panel title=" Expreince">
                            <div className="w3-text-black">
                                {state.user.userByR[0]._exp}
                            </div>

                        </Panel>
                        <Panel title="  Formation">

                            <div className="w3-text-black">
                                {state.user.userByR[0]._deplo}

                            </div>
                        </Panel>
                    </div>

                )
                }
            </div>

        </Layout>

    </div>)
}




export default UserInfo