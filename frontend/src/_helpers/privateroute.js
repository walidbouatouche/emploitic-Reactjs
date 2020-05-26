import React, { Component } from 'react';
import Auth from './auth';
import Login from '../pages/login'
import { Route, Redirect } from 'react-router-dom';

/*
         Check for token Show the login page if  it is false 
        and show the receiving page from props if it is true
        */

const testAuth = Auth.isAuth();
const testAdmin = Auth.getRole() === 'admin';
const testUser = Auth.getRole() === 'user';

const UserRoute = ({ component: Component_, ...rest }) => {


    // only show when logged in

    if ((!testAuth)) {
        return (
            <Redirect to='/login' />
        );

    }
    else if (testUser === false && testAdmin === false) {

        return (
            <Redirect to='/login' />
        );
    }
    else {
        return (
            <div>
                <Route  {...rest}  render={props=>{

                    return <Component_ {...props}></Component_>
                }}/>
            </div>

        );

    }


}

const AdminRoute = ({ component: Component_, ...rest }) => {


    // only show when  in


    if ((testAdmin === false)) {
        return (
            <Redirect to='/login' />
        );

    }
    else if (!testAuth) {

        return (
            <Redirect to='/login' />
        );
    }
    else {
        return (
            <div>
                <Route  {...rest}  render={props=>{

                    return <Component_ {...props}></Component_>
                }}/>
            </div>

        );

    }









}


export { UserRoute, AdminRoute }
