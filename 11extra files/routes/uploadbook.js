var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var multer = require('multer');
var fs = require('fs');


const Book = require('../models/books');

var storage = multer.diskStorage({
 destination: function(req, file, cb) {
 cb(null, 'uploads/')
 },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

var upload = multer({
 storage: storage
});
                            


router.post('/',upload.any(), function (req,res){

  var data = req.body;
  var images = req.files[0];
  var newFile = new Book();
  newFile.courseCode = data.courseCode;
  newFile.courseName = data.courseName;
  newFile.myimage = images.originalname;
  newFile.year = data.year;
  newFile.semester=data.semester;
  newFile.department=data.department;
  newFile.author=data.author;
  newFile.bookName=data.bookName;

    newFile.save(function(err, doc){
    if (err) {console.log('error while saving in database');}
    res.send(req.body);

    var filename = newFile._id + images.originalname;
                    console.log(filename);
    


                  
  });


File.create(images, function(error, image) {
  if (!error) {
    console.log("image created.");
  }
});


  
})

module.exports = router;

