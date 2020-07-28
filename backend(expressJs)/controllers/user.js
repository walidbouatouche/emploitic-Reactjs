const CON = require('../config/sql.config');
const jwt = require('jsonwebtoken'); // token for login
const _response = require('../_helpers/_response')
// const nodemailer = require('nodemailer').mail;

const sendmail = require('sendmail')();



exports.signup = (req, res, next) => {

    const { mail, password } = req.body.data;
    CON.query(`select mail from user where mail='${mail}'`, (err, result) => {
        if (err) { _response(res, 401, { message: 'invalidRequest' }); }
        // check if user already  singup
        if (result.length > 0) {
            _response(res, 400, { message: 'Mail Already' });
        }
    })
    const info = JSON.stringify([{ creatAt: new Date(), updateAt: new Date() }]);
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
        mail ,
        entrpName
        )
        VALUES (
        '${hash}', '[]',  '',  '',  '[]', '${info}','','','','','user','${mail}',''
        )
        `
    CON.query(QUERY, (err, result) => {
        if (err) _response(res, 400, { message: 'invalidRequest' });
        _response(res, 200, { message: "succefully" })
    })

}

exports.login = (req, res, next) => {

    // connect


    const { mail, password } = req.body.data;
    const hash = (password);
    const QUERY = `SELECT * FROM user  WHERE mail='${mail}'   and  _pass='${hash}'  `
    CON.query(QUERY, function (err, user) {
        if (err) _response(res, 400, { message: 'Error' });

        if (user.length != '0') {

            const token = jwt.sign(
                { userId: user[0].id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' }
            )


            _response(res, 200, {
                role: user[0].role,
                userId: user[0].id,
                token
            })

        }

        else {
            _response(res, 400, { message: 'password Or mail not correct' })

        }

    });



}

exports.getUserById = (req, res, next) => {

    CON.query(`SELECT _exp, _cv_link ,	_cat ,_deplo ,info  ,
    nom,
    prenom,
    adresse	, 
    phone  ,
    mail ,
    entrpName
    FROM user WHERE id='${req.userId}'`, function (err, result, fields) {
        if (err) _response(res, 400, { message: 'invalid request' });
        _response(res, 200, result)
    });

}

exports.updateUser = (req, res, next) => {
    const { info, entrpName, experience, cat, deplom, userId, nom, prenom, adresse, phone } = req.body

    const newInfo = JSON.parse(info);
    // update only the update date
    newInfo[0].updateAt = new Date()

    const QUERY = `
      UPDATE user SET 
       _exp= '${experience}' ,
       _deplo ='${deplom}',
       nom	='${nom}',
       prenom ='${prenom}',
       adresse	='${adresse}',
       phone='${ phone}' ,
       _cat='${cat}',
       info='${JSON.stringify(newInfo)}',
       entrpName='${entrpName}'
      WHERE
      id = '${req.userId}'
      
      `
    CON.query(QUERY, function (err, user, fields) {
        if (err) _response(res, 400, { message: 'invalid request' });
        _response(res, 200, { "message": true })

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

    const url = `${req.protocol}://${req.get('host')}/pdfs/${req.file.filename}`
    const QUERY = `
   UPDATE user SET 
   _cv_link= '${url}' 
   WHERE
   id = '${req.body.userId}'
   `
    CON.query(QUERY, function (err, user, fields) {
        if (err) _response(res, 400, { message: 'invalid request' });
        console.log(user);
        if (Boolean(user)) {
            _response(res, 200, { url })
        }

        else {
            _response(res, 400, { message: 'invalid request' });
        }
    }
    )

}

exports.getUsersByOffre = (req, res, next) => {
    const idOffre = req.params.id;
    const QUERY = `
    SELECT    id , _exp, _cv_link ,	_cat ,_deplo ,info  ,
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
        if (err) _response(res, 400, { message: 'invalid request' });
        _response(res, 200, result)
    });



}



exports.sendNewPass = (req, res, next) => {




    const { mail } = req.params;
    const newPass = "random('465645')"
    const hash = (newPass)
    const QUERY = `
      UPDATE user SET 
      _pass='${hash}'
      WHERE
      mail = '${mail}'
      `
    CON.query(QUERY, function (err, user, fields) {
        if (err) _response(res, 400, { message: 'Verfier Your email' });

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'youremail@gmail.com',
                pass: 'yourpassword'
            }
        });

        var mailOptions = {
            from: 'youremail@gmail.com',
            to: mail,
            subject: ' rest pass ',
            text: 'Your new Password' + hash
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                _response(res, 400, { message: 'email not set' });
            } else {
                _response(res, 200, { message: "Email sent:" })
            }
        });



    }
    )

}





exports.getCv = (req, res, next) => {
    const idUser = req.userId;
    const cv = idUser + '.pdf';
    res.sendFile(cv, { root: './pdfs' });



}
exports.getCvR = (req, res, next) => {
    const idUser = req.params.iduser;
    const idR = req.userId
    //  const _data = JSON.parse(data)

    // just  check if use postule the offres of re Rcuitrer
    const QUERY = 'SELECT  * from myoffre, offre WHERE   `myoffre`.` id_user` =' + `${idUser}` + ' And  `offre`.`_id` = `myoffre`.`idoffre`' + 'And `offre`.`userId`=' + "'" + idR + "'"

    CON.query(QUERY, function (err, result, fields) {
        if (err) _response(res, 400, { message: 'invalid request' });

        if (result.length > 0) {

            const cv = idUser + '.pdf';
            res.sendFile(cv, { root: './pdfs' });
        }

        else {
            _response(res, 400, { message: 'invalid request' });
        }
    })







}


exports.getUserByR = (req, res, next) => {
    const idUser = req.params.iduser;
    const idR = req.userId
    //  const _data = JSON.parse(data)

    // just  check if use postule the offres of re Rcuitrer
    const QUERY = 'SELECT  * from myoffre, offre WHERE   `myoffre`.` id_user` =' + `${idUser}` + ' And  `offre`.`_id` = `myoffre`.`idoffre`' + 'And `offre`.`userId`=' + "'" + idR + "'"

    CON.query(QUERY, function (err, result, fields) {
        if (err) _response(res, 400, { message: 'invalid request' });

        if (result.length > 0) {

            CON.query(`SELECT _exp, _cv_link ,	_cat ,_deplo ,info  ,
            nom,
            prenom,
            adresse	, 
            phone  ,
            mail ,
            entrpName
            FROM user WHERE id='${idUser}'`, function (err, result, fields) {
                if (err) _response(res, 400, { message: 'invalid request' });
                _response(res, 200, result)
            });

        }

        else {
            _response(res, 400, { message: 'invalid request' });
        }
    })







}