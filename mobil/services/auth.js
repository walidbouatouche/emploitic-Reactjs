import { AsyncStorage } from 'react-native'

//Class for authentication, token monitoring, and member identification
//فئة للمصادقة ومراقبة الرمز المميز وتحديد العضو
/* https://www.javascripttutorial.net/es6/javascript-class/ */

class _Auth {
    constructor() {
        AsyncStorage.getItem('userId').then((value) => { this._userId = value });
        AsyncStorage.getItem('token').then((value) => { this._token = value });
    }
    setToken(token) {
        AsyncStorage.setItem('token', token)
        this._token = token
    }
    setUserId(userId) {
        AsyncStorage.setItem('userId', userId);
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
        AsyncStorage.clear()
    }
    isAuth() {
        return Boolean(this._token);
    }
}

export default new _Auth()
