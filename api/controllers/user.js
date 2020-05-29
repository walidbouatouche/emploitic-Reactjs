const CON = require('../config/sql.config');
const jwt = require('jsonwebtoken'); // token for logi

exports.signup = (req, res, next) => {
    const errorMessage = (msg) => {
        res.status(400).json({ message: msg })
    }


    try {

        const { mail, password } = req.body.data;
        CON.query(`select mail from user where mail='${mail}'`, (err, result) => {
            if (err) { errorMessage('invalidRequest'); }
            // check if user already  singup
            if (result.length > 0) {
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

            res.status(200).json({ message: "succefully" })
        })
    }
    catch{

    }
}

exports.login = (req, res, next) => {

    // connect
    const errorMessage = (msg) => {
        res.status(400).json({ message: msg })
    }

    try {
        const { mail, password } = req.body.data;
        const hash = (password);
        const QUERY = `SELECT * FROM user  WHERE mail='${mail}'   and  _pass='${hash}'  `
        CON.query(QUERY, function (err, user) {
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

    /* 
    *after up pdf file in pdfs  floders  
    
    * we will  put the name already get from req  wth the url of local floder
    pdfs
      * save it in database
     */
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

exports.getUsersByOffre = (req, res, next) => {
    const errorMessage = (msg) => {
        res.status(401).json({ message: msg })

    }

    const idOffre = req.params.id;

    const QUERY = `
    SELECT _exp, _cv_link ,	_cat ,_deplo ,info  ,
    nom,
    prenom,
    adresse	, 
    phone 
    from myoffre, user
    WHERE 
    myoffre.idoffre =${idOffre}
    AND  user.id = `+ "`myoffre`.` id_user`"
    console.log(QUERY)
    CON.query(QUERY, function (err, result) {
        if (err) errorMessage(err);
        res.status(200).json(result)
    });



}
