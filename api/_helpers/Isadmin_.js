const jwt = require('jsonwebtoken');
const CON = require('../config/sql.config')

module.exports = (req, res, next) => {

    const errorMessage = (msg) => {
        res.status(401).json({ message: msg });
    }
    try {
        const token = req.headers.authorization;
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        const QUERY = `SELECT mail FROM USER  WHERE  id=${userId} And role='admin'`
        CON.query(QUERY, (err, result) => {
            if (err) errorMessage('invalidRequest'); // error sql syntax
          
          
            if (result.length > 0) { 
                 // is admin
              
                next()
            }
         else{
                   // not admin
            errorMessage('invalidRequest');
         }

        })
    }
    catch{
        //  invalidRequest()

    }
}