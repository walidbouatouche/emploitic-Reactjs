const Joi = require('@hapi/joi')
const validateRequest = require('../_helpers/validation');

// in my poroject i do not use all validation you can, use it with '@hapi/joi
exports._deleteOffreById = (req, res, next) => {
    const schema = Joi.object({
        id: Joi.number().required()
    })
    
    
    validateRequest(res, next, schema, req.params)

}



