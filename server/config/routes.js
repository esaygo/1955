//specifies which routes will be handled by which controllers

var mongoose = require('mongoose');
var User = mongoose.model('User');;
var users = require('../controllers/users.js');

module.exports = function(app) {

  app.get('/', function (req,res) {
    users.show_all(req, res);
    //res.render('index');
    //console.log("empty");
  });

  app.get('/new/:name', function(req,res) {
    users.create_user(req,res);
  });

  app.get('/:name', function(req,res) {
    //console.log("post data: ", req);
    users.show_user(req,res);
  });

  app.get('/remove/:name', function(req, res) {
    users.remove_user(req,res);
  });

}
