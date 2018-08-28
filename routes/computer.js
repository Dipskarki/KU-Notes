var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');

const Image = require('../models/files');


router.get('#syllabus', function(req,res){
	Image.find({uploadtype: "S"},function(err,doc){
		if (err) throw err;
		res.render('computer',{files:doc})
	})
})

module.exports=router;