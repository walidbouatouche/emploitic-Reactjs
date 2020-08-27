
// middelware for validation  
const _response = require('./_response')
function validateRequest(res, next, schema, body) {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };

    const { error } = schema.validate(body, options);
    if (error) {
        _response(res, 400, { message: 'invalidRequest' });

    } else {

        next();
    }

}


module.exports = validateRequest;
