import React, { Component } from 'react';
import Auth from './auth';
import Login from '../pages/login'
//صفحة تسعمل فقط من اجل المصادقة
//A page used only for authentication             /*https://www.javatpoint.com/react-higher-order-components/
const HocAuth = (HocComponent) => {
    return class extends Component {

        render() {
            /*
            Check for token Show the login page if  it is false 
           and show the receiving page from props if it is true
           */

            /*
             false التحقق من وجود التوكن اظهار صفحة الدخول اذا كان
              وإظهار الصفحة المستقبل من props اذا كان true 
               */

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


export default HocAuth
