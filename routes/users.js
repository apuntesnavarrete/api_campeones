var express = require('express');
const { User } = require('../models_sequelize');
var router = express.Router();
// const sequelize = require('../sequelize');
// const { User } = require('../models_sequelize'); // Importa el modelo User

//const {User} = require('../models_sequelize')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    "hola": "texto",
    goles:"3"

  });
});

router.get('/prueba', async function(req, res, next) {
  const usuario = await User.findAll()
  res.send(usuario)
});

module.exports = router;
