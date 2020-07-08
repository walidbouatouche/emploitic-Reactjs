const jwt = require('jsonwebtoken');
const _response = require('./_response')

const CON = require('../config/sql.config')
module.exports = (req, res, next) => {



    const data = JSON.parse((req.params.data));
    const { token, userId } = data;
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');




    // token in this time is token of admin
    // userId int this time is  of user

    if (!decodedToken) {
        _response(res, 401, { message: 'Unauthorized' })
    }

    const QUERY = `SELECT mail FROM USER  WHERE  id=${decodedToken.userId} And role='admin'`
    CON.query(QUERY, (err, result) => {
        if (err) _response(res, 401, { message: 'invalidRequest' }); // error sql syntax
        if (result.length > 0) {
            // is admin
            const cv = userId + '.pdf';
            res.sendFile(cv, { root: './pdfs' });
        }
        else {
            // not admin
            _response(res, 401, { message: 'Unauthorized' })
        }
    })






}  