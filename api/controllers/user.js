const CON = require('../config/sql.config');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {

    const errorMessage = (msg) => {
        res.status(400).json({ message: msg })
    }



    try {
        // here I will some validation(sql injection / auth / data validation)

        const { mail, password } = req.body.data;
        CON.query(`select mail from user where mail='${mail}'`, (err, result) => {
            if (err) { errorMessage('invalidRequest'); }
            if (result.length > 1) {
                errorMessage(' Mail Already')

            }
        })


        const hash = (password);
        const QUERY =
            `INSERT INTO  user (
        _pass ,
        _exp ,
        _cv_link ,
        _cat ,
        _deplo ,
        info,
        nom,
        prenom,
        adresse	, 
        phone ,
        role ,
        mail 
        )
        VALUES (
        '${hash}',  '',  '',  '',  '',  '','','','','','user','${mail}'
        )
        `
        CON.query(QUERY, (err, result) => {
            if (err) errorMessage('invalidRequest')

            res.status(200).json({ message: "seccuf" })
        })
    }
    catch{

    }
}

exports.login = (req, res, next) => {


    const errorMessage = (msg) => {
        res.status(400).json({ message: msg })
    }

    try {


        const { mail, password } = req.body.data;
        const hash = (password);

        const QUERY = `SELECT * FROM user  WHERE mail='${mail}'   and  _pass='${hash}'  `
        CON.query(QUERY, function (err, user, fields) {
            if (err) throw errorMessage("somthing Wtong");

            if (Boolean(user)) {
                res.status(200).json({
                    role: user[0].role,
                    userId: user[0].id,
                    token: jwt.sign(
                        { userId: user[0].id },
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h' }
                    )
                })

            }

            else {
                errorMessage("  password Or mail not correct")
            }

        });
    }
    catch{

    }


}


exports.getUserById = (req, res, next) => {

    const errorMessage = (msg) => {
        res.status(400).json({ message: msg })
    }

    try {

        CON.query(`SELECT _exp, _cv_link ,	_cat ,_deplo ,info  ,
    
    nom,
    prenom,
    adresse	, 
    phone 
    FROM user WHERE id='${req.params.id}'`, function (err, result, fields) {
            if (err) errorMessage("invalid request !!");

            res.status(200).json(result)
        });
    }
    catch{

    }

}

exports.updateUser = (req, res, next) => {

    const errorMessage = (msg) => {
        res.status(400).json({ message: msg })
    }

    const { experience, cat, deplom, userId, nom, prenom, adresse, phone } = req.body
    const QUERY = `
      UPDATE user SET 
       _exp= '${experience}' ,
       _deplo ='${deplom}',
       nom	='${nom}',
       prenom ='${prenom}',
       adresse	='${adresse}',
       phone='${ phone}' ,
       _cat='${cat}'
      WHERE
     id = '${userId}'
      
      `
    CON.query(QUERY, function (err, user, fields) {
        if (err) errorMessage('invalid request');

        res.status(200).json({ "message": true })

    }
    )

}

exports.upfileCv = (req, res, next) => {

    console.log('here') ;
    const errorMessage = (msg) => {
        res.status(400).json({ message: msg })
    }

    const url = `${req.protocol}://${req.get('host')}/pdfs/${req.file.filename}`

    const QUERY = `
   UPDATE user SET 
   _cv_link= '${url}' 
   WHERE
   id = '${req.body.userId}'

   `
    CON.query(QUERY, function (err, user, fields) {
        if (err) errorMessage('invalid rerquest');
        console.log(user);
        if (Boolean(user)) {
            res.status(200).json({ url })

        }

        else {
            errorMessage('invalid rerquest');
        }
    }
    )

}
