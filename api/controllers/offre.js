
// connect to SQL
const CON = require('../config/sql.config');



exports.getOffreByLimit = (req, res, next) => {

  const errorMessage = (msg) => {
    res.status(401).json({ message: msg })
  }



  try {
    // here I will some validation(sql injection / auth / data validation)

    const { limit } = req.params;
    const QUERY = `SELECT * FROM OFFRE limit ${limit}   `


    CON.query(QUERY, (err, result) => {
      if (err) errorMessage('invalidRequest')
      if (result.length <= 0) {
        errorMessage("no data")
      }
      res.status(200).json(result)
    })
  }
  catch{

  }
}





exports.searchOffre = (req, res, next) => {

  const errorMessage = (msg) => {
    res.status(401).json({ message: msg });
  }
  try {

    // here I will some validation(sql injection / auth / data validation)


    // get char from url
    const { char } = req.params;
    const QUERY = `SELECT * FROM OFFRE WHERE titre like '%${char}%'`


    CON.query(QUERY, (err, result) => {
      if (err) errorMessage('invalidRequest'); // errer sql syntax
      res.status(200).json(result)
    })
  }
  catch{
    invalidRequest()

  }
}




exports.getOffreByCat = (req, res, next) => {
  try {
    const errorMessage = (msg) => {
      res.status(401).json({ message: msg })
    }

    // here I will some validation(sql injection / auth / data validation)

    const { catId } = req.params;
    const QUERY = `SELECT * FROM offre  WHERE cat='${catId}'`
    CON.query(QUERY, (err, result) => {
      if (err) errorMessage('invalidRequest')
      res.status(200).json(result)
    });
  }
  catch{
    invalidRequest()
  }
}




exports.deleteOffreById = (req, res, next) => {

  const errorMessage = (msg) => {
    res.status(401).json({ message: msg })
  }

  // here I will some validation(sql injection / auth / data validation)


  const { id } = req.params;
  const QUERY = `DELETE  FROM offre  WHERE _id='${id}'`

  CON.query(QUERY, (err, result) => {
    if (err) errorMessage('invalidRequest');

    res.status(200).json(result)
  });

}




exports.addOffre = (req, res, next) => {

  const errorMessage = (msg) => {
    res.status(401).json({ message: msg })
  }

  try {
    const active = true;
    const {
      cat,
      date_d,
      date_f,
      description,
      entreprise,
      imguri,
      location,
      titre,
      type } = req.body.data

    const QUERY = `
  INSERT INTO
    offre
    ( _id,
      titre,
      date_d,
      date_f,
      entreprise,
      description,
      imguri,
      active,
      type,
      cat,
      location )
      VALUES 
    ('', 
      '${titre}',
      '${date_d}',
      '${date_f}',
      '${entreprise}',
      '${description}',
      '${imguri}',
      '${active}',
      '${type}',
      '${cat}',
      '${location}'  ) `;

    CON.query(QUERY, (error) => {
      if (error) {
        errorMessage(" Something wrong")

      }
      res.status(200).json({ message: " succefully !!" })

    })
  }
  catch{
    errorMessage(" Something wrong")

  }
}


exports.updateOffre = (req, res, next) => {

  const errorMessage = (msg) => {
    res.status(401).json({ message: msg })

  }
  const
    {
      cat,
      date_d,
      date_f,
      description,
      entreprise,
      imguri,
      location,
      titre,
      type,
      _id,
      active

    } = req.body.data
  const QUERY = ` 
  UPDATE OFFRE SET
  titre='${titre}',
  date_d='${date_d}',
  date_f='${date_f}',
  entreprise='${entreprise}',
  description='${description}',
  imguri='${imguri}',
  active='${active}',
  type='${type}',
  cat='${cat}',
  location='${location}'
  WHERE
  _id=${_id}
  `;

  console.log(QUERY)

  CON.query(QUERY, (error, result) => {
    if (error) errorMessage("somthing wrong");
    res.status(200).json({ message: "succefuly" })
  })

}


exports.getOffreById = (req, res, next) => {

  const errorMessage = (msg) => {
    res.status(401).json({ message: msg })
  }

  try {
    // here I will some validation(sql injection / auth / data validation)

    const { id } = req.params;
    const QUERY = `SELECT * FROM OFFRE WHERE _id=${id} `


    CON.query(QUERY, (err, result) => {
      if (err) errorMessage('invalidRequest')
      if (result.length <= 0) {
        errorMessage("no data")
      }
      res.status(200).json(result)
    })
  }
  catch{

  }
}






exports.postulerOffres = (req, res, next) => {
  const { id, idUser } = req.body;

  const errorMessage = (msg) => {
    res.status(401).json({ message: msg })

  }





  const QUERY = 'INSERT INTO  `db`.`myoffre` (` id` ,` id_user` ,`idoffre`)VALUES (NULL , "' + idUser + '","' + id + '")'


  console.log(QUERY)


  CON.query(QUERY, function (err, result) {
    if (err) errorMessage(err);
    res.status(200).json("succes")
  });



}



exports.getMyoffres = (req, res, next) => {
  const errorMessage = (msg) => {
    res.status(401).json({ message: msg })

  }


  const idUser = req.params.id;


  const QUERY = 'SELECT  * from myoffre, offre WHERE   `myoffre`.` id_user` =' + `${idUser}` + ' AND  `offre`.`_id` = `myoffre`.`idoffre`'
  console.log(QUERY)
  CON.query(QUERY, function (err, result) {
    if (err) errorMessage(err);
    res.status(200).json(result)
  });



}
