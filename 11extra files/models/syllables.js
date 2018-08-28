var mongoose = require('mongoose');

//path and originalname are the fields stored in mongoDB
var syllableSchema = mongoose.Schema({
courseCode: String,
courseName: String,
year: Number,
semester: Number,
department: String,
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
 
});
 
 
var Syllable = module.exports = mongoose.model('Syllable', imageSchema);
 
 module.exports.getImages = function(callback, limit) {
 
 Syallable.find(callback).limit(limit);
}