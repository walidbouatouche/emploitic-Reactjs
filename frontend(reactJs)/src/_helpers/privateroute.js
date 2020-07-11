import React, { Component } from 'react';
import Auth from './auth';
import Login from '../pages/login'
import { Route, Redirect } from 'react-router-dom';

/*
         Check for token Show the login page if  it is false 
        and show the receiving page from props if it is true
        */

const testUser = Auth.getRole() === 'user';
const testAdmin = Auth.getRole() === 'admin';
const testRecruiter = Auth.getRole() === 'r';

const UserRoute = ({ component: Component_, ...rest }) => {


    if ((!testUser)) {
        return (
            <Redirect to='/login' />
        );

    }

    else {

        // only show when logged in

        return (
            <div>
                <Route  {...rest} render={props => {

                    return <Component_ {...props}></Component_>
                }} />
            </div>

        );

    }


}

const AdminRoute = ({ component: Component_, ...rest }) => {




    if ((testAdmin === false)) {
        return (
            <Redirect to='/login' />
        );

    }

    // only show when  in
 
    else {
        return (
            <div>
                <Route  {...rest} render={props => {

                    return <Component_ {...props}></Component_>
                }} />
            </div>

        );

    }









}


const RecruiterRoute = ({ component: Component_, ...rest }) => {




    if ((testRecruiter === false)) {
        return (
            <Redirect to='/login' />
        );

    }

    // only show when  in
 
    else {
        return (
            <div>
                <Route  {...rest} render={props => {

                    return <Component_ {...props}></Component_>
                }} />
            </div>

        );

    }









}

export { UserRoute, AdminRoute, RecruiterRoute }
