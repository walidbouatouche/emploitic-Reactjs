const jwt = require('jsonwebtoken');
const _response = require('./_response')

module.exports = (req, res, next) => {

    // the user can only read his file
    // we we use store for get current token from back
    // then we make comparasion with request token from front and  current sotre 
    // and the name of cv is id user 
    // all this big comparisaon  just for asure the user kann only open his file


    const data = JSON.parse((req.params.data));

    const { token, userId } = data;


    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');

    if (!decodedToken) {
        _response(res, 401, { message: 'Unauthorized' })
    }
    if (decodedToken.userId != userId) {
        _response(res, 401, { message: 'Unauthorized' })

    }
    const cv = decodedToken.userId + '.pdf';
    // create new token when open files



    res.sendFile(cv, { root: './pdfs' });



}  