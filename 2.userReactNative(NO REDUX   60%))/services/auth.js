import { AsyncStorage} from 'react-native'


class _Auth {
   constructor() {
    AsyncStorage.getItem('userId').then((value) =>{this._userId =value})  ;
    AsyncStorage.getItem('token').then((value) =>{this._token =value})  ;
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
