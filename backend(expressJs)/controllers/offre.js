// connect to SQL
const CON = require('../config/sql.config');
const _response = require('../_helpers/_response')

exports.getOffreByLimit = (req, res, next) => {

  const { limit } = req.params;
  const QUERY = `SELECT * FROM OFFRE limit ${limit}   `
  CON.query(QUERY, (err, result) => {
    if (err) _response(res, 401, { message: 'invalidRequest' });
    if (result.length < 0) {
      _response(res, 401, { message: 'no data' })
    }
    _response(res, 200, result)
  })
}



exports.searchOffre = (req, res, next) => {

  // get char from url
  const { char } = req.params;
  const QUERY = `SELECT * FROM OFFRE WHERE titre like '%${char}%'`
  CON.query(QUERY, (err, result) => {
    if (err) _response(res, 401, { message: 'invalidRequest' });// errer sql syntax
    _response(res, 200, result)
  })


}




exports.getOffreByCat = (req, res, next) => {

  const { catId } = req.params;
  const QUERY = `SELECT * FROM offre  WHERE cat='${catId}'`
  CON.query(QUERY, (err, result) => {
    if (err) _response(res, 401, { message: 'invalidRequest' });
    _response(res, 200, result)
  });

}




exports.deleteOffreById = (req, res, next) => {

  const { id } = req.params;
  const QUERY = `DELETE  FROM offre  WHERE _id='${id}'`
  CON.query(QUERY, (err, result) => {
    if (err) _response(res, 401, { message: 'invalidRequest' });
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
      _response(res, 401, { message: 'invalidRequest' })
    }
    _response(res, 200, { message: " succefully !!" })


  })


}


exports.updateOffre = (req, res, next) => {


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
    console.log(error)
    if (error) _response(res, 401, { message: 'invalidRequest' });
    _response(res, 200, { message: " succefully !!" })
  })
}


exports.getOffreById = (req, res, next) => {

  const { id } = req.params;
  const QUERY = `SELECT * FROM OFFRE WHERE _id=${id} `
  CON.query(QUERY, (err, result) => {
    if (err) _response(res, 401, { message: 'invalidRequest' });


    _response(res, 200, result)
  })
}

exports.postulerOffres = (req, res, next) => {
  const { id, idUser } = req.body;
  let QUERY = `SELECT * FROM  myoffre where idoffre='${id}' AND  \` id_user\`='${idUser}'`
  CON.query(QUERY, function (err, result) {
    if (err) _response(res, 401, { message: 'Error' });
    if (result.length > 0) {
      _response(res, 401, { message: ' offre Already postuler' });

    }
    else {
      QUERY = 'INSERT INTO  `db`.`myoffre` (` id` ,` id_user` ,`idoffre`)VALUES (NULL , "' + idUser + '","' + id + '")'
      CON.query(QUERY, function (err, result) {
        if (err) _response(res, 401, { message: 'Error' });
        _response(res, 200, { message: " succefully !!" })
      });
    }
  });


}


exports.getMyoffres = (req, res, next) => {
  const idUser = req.params.id;
  const QUERY = 'SELECT  * from myoffre, offre WHERE   `myoffre`.` id_user` =' + `${idUser}` + ' AND  `offre`.`_id` = `myoffre`.`idoffre`'
  CON.query(QUERY, (err, result) => {
    if (err) _response(res, 401, { message: 'Error' });;
    _response(res, 200, result)
  });

}


exports.getOffreNumber = (req, res, next) => {
  const QUERY = "SELECT count(*) from offre "
  CON.query(QUERY, (err, result) => {
    if (err) _response(res, 401, { message: 'Error' });
    _response(res, 200, result)
  })
}



exports.getOffreByLimitAndCat = (req, res, next) => {
  // get offre by id and limit of course
  const { limit, id } = req.params;
  const QUERY = `SELECT * FROM OFFRE  _id=${id} limit ${limit} `
  CON.query(QUERY, (err, result) => {
    if (err) _response(res, 401, { message: 'invalidRequest' });
    if (result.length < 0) {
      _response(res, 401, { message: 'no data' })
    }
    _response(res, 200, result)
  })

}


// for pagination in frontend
exports.getNumberOffresByCat = (req, res, next) => {
  const { catId } = req.params;
  const QUERY = `SELECT count(*) FROM offre  WHERE cat='${catId}'`
 
  CON.query(QUERY, (err, result) => {
    if (err) _response(res, 401, { message: 'invalidRequest' });
    _response(res, 200, result)
  });

}



exports.getOffreByCatWithPagination = (req, res, next) => {
  const { data } = req.params;
  _data = JSON.parse(data);
  const { catId, skip , limit } = _data;
  console.log(_data)
  const QUERY = `SELECT * FROM offre  WHERE cat='${catId}' limit ${skip},${limit}`
  CON.query(QUERY, (err, result) => {
    if (err) _response(res, 401, { message: 'invalidRequest' });
    _response(res, 200, result)
  });

}
//



