
// midelleware for Auth

const jwt = require('jsonwebtoken');
const _response = require('./_response')
module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    userId = decodedToken.userId;
    console.log(userId)
    if (parseInt(userId)) {
        res.userId=userId ;
        console.log('connected')
        next()
    }
    else {
        _response(res, 401, { message: 'Unauthorized' })

    }
}