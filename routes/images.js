var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var multer = require('multer');


router.get('/', function(req, res) {

	//calling the function from index.js class using routes object..
	router.getImages(function(err, genres) {
		if (err) {
			throw err;
	 	}
		res.json(genres);
	 });
});


 router.get('/download/:id', function(req,res){
	Image.findOne({_id: req.params.id}, function(err, files){
		console.log('download..........',files);
		res.render('download', {files});
		if (err) throw err;
	})
});



router.get('/:id', function(req, res) {
	//calling the function from index.js class using routes object..
	router.getImageById(req.params.id, function(err, genres) {
	if (err) {
		throw err;
	}
	//res.download(genres.path);
	res.send(genres.path)
	});
});


module.exports = router;