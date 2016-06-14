//specifies the schema to be loaded by mongoose
//it is required by mongoose.js, which is required by server.js, so no need to require this in server.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new mongoose.Schema({
  name: String,
  created_at: {type: Date, default: Date.now}
});

var User = mongoose.model('User', UsersSchema);// setting this Schema in our Models
