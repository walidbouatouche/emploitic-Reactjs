import React, { Component } from 'react';
import Auth from './auth';
import Login from '../pages/login'


   /*
            Check for token Show the login page if  it is false 
           and show the receiving page from props if it is true
           */

const testAuth = Auth.isAuth();
const testAdmin = Auth.getRole() === 'admin';
const testUser = Auth.getRole() === 'user';

const UserAuth = (HocComponent) => {




    return class extends Component {

        render() {


    // only show when logged in

            if ((!testAuth)) {
                return (
                    <Login {...this.props}></Login>
                );

            }
            else if (testUser === false && testAdmin === false) {

                return (
                    <Login {...this.props}></Login>
                );
            }
            else {
                return (
                    <div>
                        <HocComponent {...this.props}></HocComponent>
                    </div>

                );

            }

        }
    }
}

const AdminAuth = (HocComponent) => {
    return class extends Component {

        render() {
    // only show when  in


            if ((testAdmin === false)) {
                return (
                    <Login {...this.props}></Login>
                );

            }
            else if (!testAuth) {

                return (
                    <Login {...this.props}></Login>
                );
            }
            else {
                return (
                    <div>
                        <HocComponent {...this.props}></HocComponent>
                    </div>

                );

            }

        }
    }
}


export { UserAuth, AdminAuth }
