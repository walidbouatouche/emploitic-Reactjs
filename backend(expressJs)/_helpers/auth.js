const jwt = require('jsonwebtoken');
const _response = require('./_response')
module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    userId = decodedToken.userId;

    if (parseInt(userId)) {
        next()
    }
    else {
        _response(res, 401, { message: 'Unauthorized' })

    }
}