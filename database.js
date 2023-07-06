const mysql = require('mysql2');
require('dotenv').config();
/*
const setupModels = require('../db/models/user.model')
*/

const pool = mysql.createPool({
  host     : 'localhost',
       user     : process.env.DB_USER,
       password : process.env.DB_PASSWORD,
       database : process.env.DB_DATABASE
  // solo de uso local , modificar git ignore
});


pool.getConnection((error, connection) => {
  if (error) {
    console.error('Error al conectarse a la base de datos: ', error);
    return;
  }
  console.log('Conexión exitosa a la base de datos rds aws');
  connection.release();
});

pool.query = (query, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((error, connection) => {
      if (error) {
        reject(error);
        return;
      }

      connection.query(query, values, (error, results) => {
        connection.release();
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  });
};

process.on('exit', () => {
  pool.end();
});

/*
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',port: process.env.DB_PORT, 
    dialect: 'mysql',
    
  });
*/



/*
  sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
  */
  /*
 const db = {}
 db.Sequelize = Sequelize
 db.sequelize = sequelize

db.users = require('../db/models/user.model')(sequelize, DataTypes)



db.sequelize.sync()
*/
/*
setupModels(sequelize)
sequelize.sync();
*/
  module.exports = {pool}