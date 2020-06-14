import React from 'react'

import LoginOrsingup from './compenets/loginOrsingup'

import Spinner from '../../compenents/spinner'

import { Redirect } from 'react-router-dom';

import { Alerts } from '../../compenents/alerts'
import { useSelector, useDispatch } from 'react-redux'
import { _userAction } from '../../redux/_actions/user.action';
import Auth from '../../_helpers/auth'

const LoginOrRegister = ({ history }) => {

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
        history.push('/')

    }

    // if user login  hide login page 
    if (Auth.isAuth()) {
        return <Redirect to='/' />
    }

    return (
        <div className="w3-text-center ">
            <br />
            <br />
            <h1 className="w3-text-center " >Welcom To login page</h1>
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
         <form className="w3-white w3-padding w3-col m5 w3-margin-left"  >

                <p> forget password</p>
                <input required type="email" className="w3-input w3-border" />
             <br />
            <button className="w3-button w3-orange w3-text-white"> Send</button>

</form>

        </div>


    )
}

export default LoginOrRegister