import React from 'react'

import LoginOrsingup from './compenets/loginOrsingup'

import Spinner from '../../compenents/spinner'

import { Alerts } from '../../compenents/alerts'
import { useSelector, useDispatch } from 'react-redux'
import { _userAction } from '../../redux/_actions/user.action';
import Auth from '../../_helpers/auth'

const LoginOrRegister = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch();


    function singup(user) {
        dispatch(_userAction.signup(user))
    }

    function login(user) {
        dispatch(_userAction.login(user))
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
    }

    return (
        <div>


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
            <LoginOrsingup loginOrsingup={singup} action={'singup'} />

            <LoginOrsingup loginOrsingup={login} action={'login'} />

        </div>


    )






}


export default LoginOrRegister