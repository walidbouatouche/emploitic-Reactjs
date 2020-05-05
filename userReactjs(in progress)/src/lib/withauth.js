import React, { Component } from 'react';
import Auth from '../services/auth';
import Login from '../pages/login'

export default function HocAuth(HocComponent) {
    return class extends Component {
        render() {
            if (!Auth.isAuth()) {
                return (
                    <Login {...this.props}></Login>
                );
            }

            return (
                <div>
                    <HocComponent {...this.props}></HocComponent>
                </div>

            );
        }
    }
}  