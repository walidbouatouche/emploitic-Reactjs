const Joi = require('@hapi/joi')
const validateRequest = require('../_helpers/validation');

exports._deleteOffreById = (req, res, next) => {
    const schema = Joi.object({
        id: Joi.number().required()
    })
    validateRequest(next, schema, req.params)

}




