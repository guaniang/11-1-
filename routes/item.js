var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var connection = mysql.createPool({
  host:"localhost",
  user:"root",//administrator
  password:"123456",
  database:'user'
})
/* GET home page. */

router.post('/count', function(req, res, next) {
var c=req.body.a;
connection.query('SELECT * FROM hu WHERE cha LIKE "'+c+'%"',function(err,rows,fields){
    res.header('Access-Control-Allow-Origin',"*")
    res.send(rows)
})
});


module.exports = router;
