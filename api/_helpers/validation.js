
function validateRequest(next, schema, body) {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };

    const { error } = schema.validate(body, options);
    if (error) {


    } else {

        next();
    }

}


module.exports = validateRequest;
