const jwt = require('jsonwebtoken');
const _response = require('./_response')
var store = require('store')
module.exports = (req, res, next) => {

    // the user can only read his file
    // we we use store for get current token from back
    // then we make comparasion with request token from front and  current sotre 
    // and the name of cv is id user 
    // all this big comparisaon  just for asure the user kann only open his file
    if (store.get('user') == undefined) {
        _response(res, 401, { message: 'Unauthorized' })
    }


    const localToken = store.get('user').token || "";

    const data = JSON.parse((req.params.data));

    const { token } = data;

    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const decodedlocalToken = jwt.verify(localToken, 'RANDOM_TOKEN_SECRET');

    if (!decodedToken && !decodedlocalToken) {
        _response(res, 401, { message: 'Unauthorized' })
    }
    if (decodedToken.userId != decodedlocalToken.userId) {
        _response(res, 401, { message: 'Unauthorized' })

    }
    const cv = decodedToken.userId + '.pdf';
    // create new token when open files



    res.sendFile(cv, { root: './pdfs' });



}  