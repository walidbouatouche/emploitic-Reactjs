
//Class for authentication, token monitoring, and member identification


class _Auth {

    constructor() {
        this._userId = localStorage.getItem('userId') || ""
        this._token = localStorage.getItem('token') || ""
        this._role = localStorage.getItem('role') || ""
    }
    setToken(token) {
        localStorage.setItem('token', token)
        this._token = token
    }
    setUserId(userId) {
        localStorage.setItem('userId', userId);
        this._userId = userId;
    }
    setRole(role) {
        localStorage.setItem('role', role);
        this._role = role;
    }
    getToken() {
        return this._token;
    }
    getUserId() {
        return this._userId;
    }
    getRole() {
        return this._role;
    }
    getUserId() {
        return this._userId;
    }


    clearAll() {
        // remove user from local storage to log user out

        this._token = "";
        localStorage.clear()
        window.location.reload();
    }

    isAuth() {

        return Boolean(this._token)
    }


  

}

export default new _Auth()
