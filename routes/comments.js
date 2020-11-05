var express = require('express');
var router = express.Router();
var comments = [{id:1, content:""}]

/* GET comments. */
router.get('/', function(req, res, next) {
  res.json(comments);
});
router.post('/:id', function(req, res, next) {
  commentId = req.params.id;
  var newComments = req.body;
  comments.push(newComment);
  res.json(comments);
});
router.put('/:id', function(req, res, next) {
  var updatecomments = req.body;
  commentId = req.params.id;
  comments.forEach(comment => {
    if (comment.id === parseInt(commentId)){
      comment.content = updatecomments.content;
    }
  });
  res.json(comments);
});
router.delete('/:id', function(req, res, next) {
  res.json({mssg:"Deleted", comments:comments.filter(comment => comment.id !== parseInt(req.params.id))});
});
module.exports = router;;
