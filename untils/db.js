const mysql = require('mysql2');
const dotEnv = require('dotenv');
dotEnv.config();

const con = mysql.createPool({
    host: process.env.HOSTNAME,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    // database:'audio_stream',
    database: process.env.DATABASE,
    
}).promise();


module.exports = con;