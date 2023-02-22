const mysql = require('mysql');

db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'article-comment'
})
module.exports = db;