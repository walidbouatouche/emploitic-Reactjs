
//Class for authentication, token monitoring, and member identification
//فئة للمصادقة ومراقبة الرمز المميز وتحديد العضو
/* https://www.javascripttutorial.net/es6/javascript-class/ */

class _Auth {

    constructor() {
        this._userId = localStorage.getItem('userId') || ""
        this._token = localStorage.getItem('token') || ""
    }
    setToken(token) {
        localStorage.setItem('token', token)
        this._token = token
    }
    setUserId(userId) {
        localStorage.setItem('userId', userId);
        this._userId = userId;
    }
    getToken() {
        return this._token;
    }
    getUserId() {
        return this._userId;
    }

    clearAll() {
        this._token = "";
        localStorage.clear()
    }

     isAuth() {

    //     return tokenIsexpired();
    Boolean(this._token)
    
                        //https://www.w3schools.com/js/js_booleans.asp
     }

    // tokenIsexpired() {
    //     if (this._token) {
    //         if (Boolean(checkToken(this._token))) {
    //          return true ;
    //         }
    //         else {
    //             this.clearAll();
    //             window.location.reload();
    //             return false 
    //         }
    //     }
    //     else {
    //         return false;
    //     }
    // }
}

export default new _Auth()
