const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
   name : {type : String , required : true},
   email : {type : String , required : true , unique : true},
   prayerType : {type : String, required : true},
   count : {type  :Number, required : true},
   duaDescription : {type : String , required : true},
   created : {type : Date , default : Date.now()}
});

let User = mongoose.model('user' , UserSchema);
module.exports = User;