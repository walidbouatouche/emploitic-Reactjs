function getToken() {
    return localStorage.getItem('token') || ""
}
function getUserId() {
    return localStorage.getItem('userId') || ""
}

const userFunctions = {
    getToken,
    getUserId
}


export default userFunctions