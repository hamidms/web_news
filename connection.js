var mysql = require('mysql')

//Buat Koneksi
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_web_news'
})

conn.connect((err)=>{
    if (err) throw err;
    console.log('MySQL Terkoneksi!');
})

module.exports = conn;
