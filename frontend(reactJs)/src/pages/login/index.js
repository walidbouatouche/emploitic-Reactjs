import React from 'react'

import LoginOrsingup from './compenets/loginOrsingup'

import Spinner from '../../compenents/spinner'

import { Redirect } from 'react-router-dom';

import { Alerts } from '../../compenents/alerts'
import Model from '../../compenents/model'
import { useSelector, useDispatch } from 'react-redux'
import { _userAction } from '../../redux/_actions/user.action';
import Auth from '../../_helpers/auth'
import Layout from'../../layout/index'
import PasswordRest from './compenets/passwordRest'

const LoginOrRegister = ({ history }) => {

    const state = useSelector(state => state)
    const dispatch = useDispatch();


    function singup(user) {
        dispatch(_userAction.signup(user))
        document.getElementById('singup').style.display = 'none'
    }

    function login(user) {
        dispatch(_userAction.login(user))
        document.getElementById('login').style.display = 'none'
    }

    function makeAuth() {

        //  we receive data from backends
        const { token, userId, role } = state.user.userData

        /* 
        store user details and jwt token in local storage to 
        keep user logged in between page refreshes 

        */
        Auth.setToken(token);
        Auth.setUserId(userId);
        Auth.setRole(role)
        window.location.reload();
        history.push('/')

    }

    function restPass(email) {
        alert(" we send new pass in your email")
        document.getElementById('restPass').style.display = 'none'

    }

    // if user login  hide login page 
    if (Auth.isAuth()) {
        return <Redirect to='/' />
    }

    return (
        <Layout>

        <div className="w3-text-center  w3-padding">
            <br />
            <br />
            <div style={{ width: '50%', marginRight: "auto", marginLeft: "auto" }} className=" w3-border w3-white  w3-text-center  ">
                <br />
                <br />
                <h5 className="w3-text-center " style={{ width: '40%', marginRight: "auto", marginLeft: "auto" }}  >   Welcom To login page</h5>
                {state.user.loading && <Spinner />}
                {state.user.error && <Alerts.AlertDanger text={state.user.error} />}

                {state.user.succes && <Alerts.Alertsuccess text={" singup Success!"} />}

                {
                    // when we receive userData mean: successfully login
                    // we will call funtion makeAuth
                }

                {state.user.userData && (makeAuth.call())}

                <br />
                <br />
                <Model id='singup' title={<Button title={'singup'} />}>
                    <LoginOrsingup loginOrsingup={singup} action={'singup'} />

                </Model>

                <Model id='login' title={<Button title={'login'} />}>
                    <LoginOrsingup loginOrsingup={login} action={'login'} />

                </Model>

                <Model id='restPass' title={<Button title={'forget Password'} />}>
                    <PasswordRest restPass={restPass} />

                </Model>

            </div>

        </div>
            
        </Layout>
    )
}

export default LoginOrRegister


function Button({ title }) {
    return (<div style={{ width: '50%', marginRight: "auto", marginLeft: "auto" }}>
        <button style={{ width: '100%' }} className="w3-btn w3-orange w3-padding w3-margin w3-large">{title}</button>
    </div>)
}