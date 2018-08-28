var mongoose = require('mongoose');

//path and originalname are the fields stored in mongoDB
var lectureSchema = mongoose.Schema({
courseCode: String,
courseName: String,
year: Number,
semester: Number,
department: String,
myimage: String,
instructor: String
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
 
 
var Lecture = module.exports = mongoose.model('Lecture', lectureSchema);
 
 module.exports.getImages = function(callback, limit) {
 
 Lecture.find(callback).limit(limit);
}