var express = require('express');
const {pool} = require('../database');

var router = express.Router();

router.get('/', async function(req, res, next) {
  let consulta = "SELECT * FROM historial_campeones"
 let vista = await pool.query(consulta)
  res.send(vista)
});

module.exports = router;
