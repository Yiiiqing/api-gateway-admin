var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/user')
var port_controller = require('../controllers/port')
/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('index.html')
});

router.get('/home',function(req,res,next){
  res.render('home.html')
})

router.post('/login',user_controller.login)
.get('/privilege',user_controller.list)
.get('/port',port_controller.list)
.post('/port/add',port_controller.add)
.post('/port/delete',port_controller.delete)
module.exports = router;
