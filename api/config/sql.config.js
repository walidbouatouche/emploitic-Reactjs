const mysql = require('mysql');
const serverInfo = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db'
}

var con = mysql.createConnection(serverInfo);
con.connect((errors) => {
    if (errors) throw console.log(" Database not valid");
    console.log("Connected !");

})

module.exports = con 