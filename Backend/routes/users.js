var express = require('express');
var router = express.Router();
const {adduser}=require('../contollers/crudOperations')

/* GET users listing. */
router.post('/adduser',adduser);

module.exports = router;
