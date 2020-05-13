var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "db"
});

exports.getAllOffre = (req, res, next) => {
  con.query("SELECT * FROM offre", function (err, result, fields) {
    if (err) throw res.status(400).json(err);

    res.status(200).json(result)
  });

}

exports.getOffreByCat = (req, res, next) => {

  con.query(`SELECT * FROM offre  WHERE cat='${req.params.id}'`, function (err, result, fields) {
    if (err) throw res.status(400).json(err);

    res.status(200).json(result)
  });

}

exports.getOffreById = (req, res, next) => {

  con.query(`SELECT * FROM offre  WHERE _id='${req.params.id}'`, function (err, result, fields) {
    if (err) throw res.status(400).json(err);

    res.status(200).json(result)
  });

}



exports.postuleroffres = (req, res, next) => {
  const { id, idUser } = req.body;
  const idPostuler = id + idUser;
  console.log(req.body);

  var sql =
    `INSERT INTO  myoofre (
            
            idOffre_idUser ,
            id_user,
            idoffre 
     
            )
            VALUES (
            '${idPostuler}',  '${idUser}',  '${id}' 
            )
            `
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.status(200).json("succes")
  });



}



exports.getMyoffres = (req, res, next) => {
  const idUser = req.params.id;
  console.log(idUser);
  console.log(req.body);

  var sql =
    ` SELECT  * from  

          myoofre, offre 
          WHERE
          myoofre.idoffre=offre._id
          AND myoofre.id_user='${idUser}';

            `
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.status(200).json(result)
  });



}

exports.deleteById = (req, res, next) => {
  console.log(req.params.id);
  con.query(`DELETE  FROM offre  WHERE _id='${req.params.id}'`, function (err, result, fields) {
    if (err) throw res.status(400).json(err);

    res.status(200).json(result)
  });

}
