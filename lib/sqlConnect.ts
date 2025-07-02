import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});


//singleton not suitable for next js
// let connection:any;
// export const createConnection = async()=>{
//     if(!connection){
//         connection = await mysql.createConnection({
//              host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//         })
//     }
//     return connection;
// }