function _response(res, _status, msg) {

    res.status(_status).json(msg)
}

module.exports = _response