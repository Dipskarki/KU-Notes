var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var multer = require('multer');
const Image = require('../models/files');


router.get('/:id', function(req, res, next){
	Image.findOne({_id: req.params.id},function(err,doc){
		console.log('data...',doc);
		var file = doc.myimage;
		path = 'E:/project/KUnotes/kunotes/uploads/' +file;
		res.download(path);
	});
});

module.exports = router;

