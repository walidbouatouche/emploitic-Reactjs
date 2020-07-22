
// midelleware  check if is request from Admin(role==admin)
const jwt = require('jsonwebtoken');
const CON = require('../config/sql.config')
const _response = require('./_response')

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    const QUERY = `SELECT mail FROM USER  WHERE  id=${userId} And role='r' `

    CON.query(QUERY, (err, result) => {
        if (err) _response(res, 401, { message: 'invalidRequest' }); // error sql syntax

        if (result.length > 0) {
            // is recruiter
            req.userId = userId;
            next()
        }
        else {
            // not recruiter
            _response(res, 401, { message: 'Unauthorized' })
        }
    })


}