
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "db"
});



exports.signup = (req, res, next) => {
  const { mail, password } = req.body;
  const hash = (password)

  var sql =
    `INSERT INTO  user (
    
    _pass ,
    _exp ,
    _cv_link ,
    _cat ,
    _deplo ,
    info,
    mail ,
    nom,
    prenom,
 	adresse	, 
	phone 
    )
    VALUES (
    '${hash}',  '',  '',  '',  '',  '',  '${mail}','','','',''
    )
    `
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.status(200).json("succes")
  });



}



exports.login = (req, res, next) => {
  console.log(req);
  const { mail, password } = req.body;
  const hash = (password);
  console.log(mail);
  console.log(password);
  var sql = `SELECT * FROM user  WHERE mail='${mail}'   and  _pass='${hash}'  `
  con.query(sql, function (err, user, fields) {
    if (err) throw err;
    console.log(user);
    if (Boolean(user)) {
      res.status(200).json({
        userId: user[0].mail,
        token: jwt.sign(
          { userId: user[0].mail },
          'RANDOM_TOKEN_SECRET',
          { expiresIn: '24h' }
        )
      })

    }

    else {
      res.status(400).json({ "ereer": "erre" })
    }






  });



}


exports.upfile = (req, res, next) => {

  console.log("ok")
  const url = `${req.protocol}://${req.get('host')}/pdfs/${req.file.filename}`
  console.log(url)
  console.log(req.body.userId)
  var sql = `
 UPDATE user SET 
 _cv_link= '${url}' 
 WHERE
mail = '${ req.body.userId}'
 
 
 `
  con.query(sql, function (err, user, fields) {
    if (err) throw err;
    console.log(user);
    if (Boolean(user)) {
      res.status(200).json({ url })

    }

    else {
      res.status(400).json({ "ereer": "erre" })
    }
  }
  )

}


exports.getUserById = (req, res, next) => {

  con.query(`SELECT _exp, _cv_link ,	_cat ,_deplo ,info  ,
  
  nom,
  prenom,
 adresse	, 
phone 
  
  FROM user WHERE mail='${req.params.mail}'`, function (err, result, fields) {
    if (err) throw res.status(400).json(err);

    res.status(200).json(result)
  });

}




exports.updateUser = (req, res, next) => {
  console.log(req.body);



  const { experience, cat, deplom, userId, nom, prenom, adresse, phone } = req.body
  var sql = `
    UPDATE user SET 
   	_exp= '${experience}' ,
     _deplo ='${deplom}',
     nom	='${nom}',
     prenom ='${prenom}',
     adresse	='${adresse}',
     phone='${ phone}' ,
     _cat='${cat}'

    WHERE
   mail = '${userId}'
    
    `
  con.query(sql, function (err, user, fields) {
    if (err) throw err;

    res.status(200).json({ "message": true })

  }
  )

}