var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');

const Image = require('../models/files');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/upload', function(req, res, next) {
  res.render('upload', { title: 'Express' });
});



router.get('/chatbot', function(req, res, next) {
  res.render('chatbot', { title: 'Express' });
});


router.get('/images', function(req,res){
	Image.find({courseCode: {$exists:true}},function(err,doc){
		if (err) throw err;
		res.render('images',{files:doc})
	})
})


router.get('/tablesave', function(req,res){
	Image.find({courseCode: {$exists:true}},function(err,doc){
		if (err) throw err;
		res.render('tablesave',{files:doc})
	})
})


/*router.get('/syllabus', function(req,res){
	Image.find({uploadtype: "S"},function(err,doc){
		if (err) throw err;
		res.render('syllabus',{files:doc})
	})
})

router.get('/lectures', function(req,res){
	Image.find({uploadtype: "L"},function(err,doc){
		if (err) throw err;
		res.render('lectures',{files:doc})
	})
})

router.get('/books', function(req,res){
	Image.find({uploadtype: "B"},function(err,doc){
		if (err) throw err;
		res.render('books',{files:doc})
	})
})

router.get('/assignments', function(req,res){
	Image.find({uploadtype: "A"},function(err,doc){
		if (err) throw err;
		res.render('assignments',{files:doc})
	})
})*/



module.exports = router;

