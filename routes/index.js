var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/user')
var port_controller = require('../controllers/port')
var third_party_controller = require('../controllers/thirdParty')
/* GET home page. */

router.get('/login', function(req, res, next) {
  res.render('index.html')
});

router.get('/home',function(req,res,next){
  res.render('home.html')
})

router.post('/login',user_controller.login)
.get('/privilege',user_controller.list)
.put('/privilege',user_controller.edit)
.post('/privilege',user_controller.add)
.delete('/privilege',user_controller.delete)

.get('/port',port_controller.list)
.post('/port/add',port_controller.add)
.post('/port/delete',port_controller.delete)

.get('/thirdParty',third_party_controller.list)
module.exports = router;
