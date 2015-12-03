'use strict';

var express = require('express');
var controller = require('./whisky.controller');

var Whisky = require('./whisky.model');
var Comment = require('./comment.model');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.create);
router.get('/:id', controller.show);
router.put('/:id', controller.update);
router.post('/:id/comments', controller.addComment);
router.delete('/:id', controller.destroy);

module.exports = router;
