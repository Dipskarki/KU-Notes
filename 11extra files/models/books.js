var mongoose = require('mongoose');

//path and originalname are the fields stored in mongoDB
var bookSchema = mongoose.Schema({
courseCode: String,
courseName: String,
year: Number,
semester: Number,
department: String,
myimage: String,
author: String,
bookName: String,
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
 
 
var Book = module.exports = mongoose.model('Book', imageSchema);
 
 module.exports.getImages = function(callback, limit) {
 
 Book.find(callback).limit(limit);
}