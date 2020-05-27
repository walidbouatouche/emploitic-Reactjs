import React, { Component } from 'react';
import Auth from './auth';
 


   /*
            Check for token Show the null page if  it is false 
           and show the receiving page from props if it is true
           */
const testAuth = Auth.isAuth();
const testAdmin = Auth.getRole() === 'admin';
const testUser = Auth.getRole() === 'user';

const UserAuth = (HocComponent) => {




    return class extends Component {

        render() {



            if ((testUser === false)) {
                return null;

            }
            else if (!testAuth) {

                return null;
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


            if ((testAdmin === false)) {
                return null;

            }
            else if (!testAuth) {

                return null;

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
