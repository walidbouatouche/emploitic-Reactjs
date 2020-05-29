const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    const isErrorMessage = (msg) => {
        res.status(401).json({ message: msg })
    }
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    userId = decodedToken.userId;

    if (parseInt(userId)) {
        next()
    }
    else {
        isErrorMessage('invalid Request');
    }
}