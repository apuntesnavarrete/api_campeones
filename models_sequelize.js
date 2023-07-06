const { Sequelize, DataTypes, Model, INTEGER } = require('sequelize');
const { sequelize } = require('./database')

class User extends Model {}

User.init({
     id:INTEGER,
     id_fb:INTEGER

  
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'ejemplo_user' // We need to choose the model name
});

// the defined model is the class itself
console.log(User === sequelize.models.User); // true

module.exports = { User };