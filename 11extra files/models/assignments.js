var mongoose = require('mongoose');

//path and originalname are the fields stored in mongoDB
var assignmentSchema = mongoose.Schema({
courseCode: String,
courseName: String,
year: Number,
semester: Number,
department: String,
myimage: String,
instructor: String,
assgNo: Number
/* path: {
 type: String,
 required: true,
 trim: true
 },
 originalname: {
 type: String,
 required: true
 }*/
 
});
 
 
var Assignment = module.exports = mongoose.model('Assignment', imageSchema);
 
 module.exports.getImages = function(callback, limit) {
 
Assignment.find(callback).limit(limit);
}