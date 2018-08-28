var mongoose = require('mongoose');

//path and originalname are the fields stored in mongoDB
var imageSchema = mongoose.Schema({
courseCode: String,
courseName: String,
year: Number,
semester: Number,
department: String,
uploadtype: String,
myimage: String,

/* path: {
 type: String,
 required: true,
 trim: true
 },
 originalname: {
 type: String,
 required: true
 }*/
 
},{ runSettersOnQuery: true });
 
 
var File = module.exports = mongoose.model('File', imageSchema);
 
 module.exports.getImages = function(callback, limit) {
 
 File.find(callback).limit(limit);
}