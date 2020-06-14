/*
* help function help you for answer every request
* res  for status response ( 200 or 400 .... )
* json response to frontend(reat , angular ,...)
*/

function _response(res, _status, msg) {

    res.status(_status).json(msg)
    return false;
}

module.exports = _response