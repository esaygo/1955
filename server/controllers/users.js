//controls all the server-side logic and is called upon by the routes
//interacts with preloaded models
//sends response to client

var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {

  create_user: function(req, res) {
    console.log("get data", req.params.name);
    var user = new User({
                    name: req.params.name
                });
    user.save(function(err, users) {
      if(err) {
        console.log(err);
        console.log('something went wrong');
        res.json(err);
      } else {
        console.log('successfully added a person!');
        res.redirect('/');
      }
    });
  },

  show: function(req, res) {
        User.find({}, function(err, users) {
          if(err) {
            console.log("error in find: ", err);
            res.json(err);
          } else {
            //console.log("messages", users);
            //console.log(res.json(users));
            res.json(users);
          }
        });
  }


}
