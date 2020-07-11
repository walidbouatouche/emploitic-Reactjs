// connect to SQL
const CON = require('../config/sql.config');
const _response = require('../_helpers/_response')


// Recruter  acess methodes 
exports.searchOffre = (req, res, next) => {
  const { userId } = req
  const { char } = req.params;
  const QUERY = `SELECT * FROM offre WHERE userId=${userId} and titre like '%${char}%'`
  CON.query(QUERY, (err, result) => {
    if (err) _response(res, 400, { message: 'invalidRequest' });// errer sql syntax
    _response(res, 200, result)
  })


}

exports.getOffreByLimit = (req, res, next) => {
  const { userId } = req
  const { limit } = req.params;
  const QUERY = `SELECT * FROM offre where userId=${userId} limit ${limit} `
  CON.query(QUERY, (err, result) => {
    if (err) _response(res, 400, { message: 'invalidRequest' });
    if (result.length < 0) {
      _response(res, 400, { message: 'no data' })
    }
    _response(res, 200, result)
  })
}




exports.deleteOffreById = (req, res, next) => {
  const { userId } = req
  const { id } = req.params;
  const QUERY = `DELETE  FROM offre  WHERE _id='${id}' And userId= ${userId}`
  CON.query(QUERY, (err, result) => {
    if (err) _response(res, 400, { message: 'invalidRequest' });
    _response(res, 200, result)
  });

}

exports.addOffre = (req, res, next) => {

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
  const { userId } = req

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
      location ,
      userId
      )
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
      '${location}' ,
      '${userId}' ) `;
  CON.query(QUERY, (error) => {
    if (error) {
      _response(res, 400, { message: 'invalidRequest' })
    }
    _response(res, 200, { message: " succefully !!" })


  })


}


exports.updateOffre = (req, res, next) => {

  const { userId } = req
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
      active ,
      entrpName
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
  entrpName='${entrpName}'
  WHERE
  _id=${_id}
  and userId=${userId} 
  `;


  CON.query(QUERY, (error, result) => {
    console.log(error)
    if (error) _response(res, 400, { message: 'invalidRequest' });
    _response(res, 200, { message: " succefully !!" })
  })
}


// user acess methodes 
exports.getOffreByCat = (req, res, next) => {
  console.log(req.headers.authorization);
  const { catId } = req.params;
  const QUERY = `SELECT * FROM offre  WHERE cat='${catId}'`
  CON.query(QUERY, (err, result) => {
    if (err) _response(res, 400, { message: 'invalidRequest' });
    _response(res, 200, result)
  });

}



exports.getOffreById = (req, res, next) => {

  const { id } = req.params;
  const QUERY = `SELECT * FROM offre WHERE _id=${id} `
  CON.query(QUERY, (err, result) => {
    if (err) _response(res, 400, { message: 'invalidRequest' });


    _response(res, 200, result)
  })
}

exports.postulerOffres = (req, res, next) => {
  const { id, idUser } = req.body;
  let QUERY = `SELECT * FROM  myoffre where idoffre='${id}' AND  \` id_user\`='${idUser}'`
  CON.query(QUERY, function (err, result) {
    if (err) _response(res, 400, { message: 'Error' });
    if (result.length > 0) {
      _response(res, 400, { message: ' offre Already postuler' });

    }
    else {
      QUERY = 'INSERT INTO  `db`.`myoffre` (` id` ,` id_user` ,`idoffre`)VALUES (NULL , "' + idUser + '","' + id + '")'
      CON.query(QUERY, function (err, result) {
        if (err) _response(res, 400, { message: 'Error' });
        _response(res, 200, { message: " succefully !!" })
      });
    }
  });


}


exports.getMyoffres = (req, res, next) => {
  const idUser = req.params.id;
  const QUERY = 'SELECT  * from myoffre, offre WHERE   `myoffre`.` id_user` =' + `${idUser}` + ' AND  `offre`.`_id` = `myoffre`.`idoffre`'
  CON.query(QUERY, (err, result) => {
    if (err) _response(res, 400, { message: 'Error' });;
    _response(res, 200, result)
  });

}


exports.getOffreNumber = (req, res, next) => {
  const { userId } = req
  const QUERY = `SELECT count(*) from offre  where userId=${userId}`
  CON.query(QUERY, (err, result) => {
    if (err) _response(res, 400, { message: 'Error' });
    _response(res, 200, result)
  })
}



exports.getOffreByLimitAndCat = (req, res, next) => {
  // get offre by id and limit of course
  const { limit, id } = req.params;
  const QUERY = `SELECT * FROM offre  _id=${id} limit ${limit} `
  CON.query(QUERY, (err, result) => {
    if (err) _response(res, 400, { message: 'invalidRequest' });
    if (result.length < 0) {
      _response(res, 400, { message: 'no data' })
    }
    _response(res, 200, result)
  })

}


// for pagination in frontend
exports.getNumberOffresByCat = (req, res, next) => {
  const { catId } = req.params;
  const QUERY = `SELECT count(*) FROM offre  WHERE cat='${catId}'`

  CON.query(QUERY, (err, result) => {
    if (err) _response(res, 400, { message: 'invalidRequest' });
    _response(res, 200, result)
  });

}

exports.getOffreByCatWithPagination = (req, res, next) => {

  const { data } = req.params;
  _data = JSON.parse(data);
  const { catId, skip, limit } = _data;
  console.log(_data)
  const QUERY = `SELECT * FROM offre  WHERE cat='${catId}' limit ${skip},${limit}`
  CON.query(QUERY, (err, result) => {
    if (err) _response(res, 400, { message: 'invalidRequest' });
    _response(res, 200, result)
  });

}
//

exports.getOffreSame = (req, res, next) => {

  const idOffre = req.params.id;

  let QUERY = `SELECT  * from myoffre, offre WHERE  \`offre\`.\`_id\` ='${idOffre}' AND  \`offre\`.\`_id\` = \`myoffre\`.\`idoffre\` limit 1 `

  CON.query(QUERY, (err, result) => {
    if (err) _response(res, 400, { message: 'Error' });
    console.log(result.length)
    if (result.length === 0) {
      _response(res, 200, []);

    }
    else {
      const idUser = result[0][' id_user'];
      QUERY = 'SELECT  * from myoffre, offre WHERE   `myoffre`.` id_user` =' + `${idUser}` + ' AND  `offre`.`_id` = `myoffre`.`idoffre` limit 4'
      CON.query(QUERY, (err, result) => {
        if (err) _response(res, 400, { message: 'Error' });;
        _response(res, 200, result)
      });
    }

  });


}







