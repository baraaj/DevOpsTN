const mysql      = require('mysql');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    port :3307,
    database : 'devops'
});

db.connect((err)=>{
    if(err)
    throw err;
    console.log('mysql connected.....');
});
module.exports = db;
