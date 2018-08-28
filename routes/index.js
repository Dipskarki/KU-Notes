var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');

const Image = require('../models/files');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/chatbot', function(req, res, next) {
  res.render('chatbot', { title: 'Express' });
});

router.get('/upload', function(req, res, next) {
  res.render('upload', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.get('/soe', function(req, res, next) {
  res.render('soe', { title: 'Express' });
});
router.get('/sos', function(req, res, next) {
  res.render('sos', { title: 'Express' });
});
/*router.get('/computer', function(req, res, next) {
  res.render('computer', { title: 'Express' });
});*/

router.get('/soe/civil', function(req,res){
	Image.find({department: "Civil Engineering"},function(err,doc){
		if (err) throw err;
		res.render('civil',{files:doc})
	})
})

router.get('/soe/computer', function(req,res){
	Image.find({department: "Computer Engineering"},function(err,doc){
		if (err) throw err;
		res.render('computer',{files:doc})
	})
})

router.get('/soe/complecture', function(req,res){
	Image.find({uploadtype: "L"},function(err,doc){
		if (err) throw err;
		res.render('computer',{files:doc})
	})
})

router.get('/soe/compsyllabus', function(req,res){
	Image.find({uploadtype: "S"},function(err,doc){
		if (err) throw err;
		res.render('computer',{files:doc})
	})
})
/*router.get('/soe/computer/#lectures', function(req,res){
	Image.find({department: "Computer Engineering"},function(err,doc){
		if (err) throw err;
		res.render('computer',{files:doc})
	})
})*/

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


router.get('/syllabus', function(req,res){
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
})







module.exports = router;

