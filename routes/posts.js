var express = require('express');
var router = express.Router();
var posts = [{id:1, post:""}]

/* GET posts. */
router.get('/', function(req, res, next) {
  res.json(posts);
});
router.post('/:id', function(req, res, next) {
  postId = req.params.id;
  var newPosts = req.body;
  posts.push(newPosts)
  res.json(posts);
});
router.put('/:id', function(req, res, next) {
  var updateposts = req.body;
  postId = req.params.id;
  posts.forEach(pos => {
    if (pos.id === parseInt(postId)){
      pos.post = updateposts.post;
    }
  });
  res.json(posts);
});
router.delete('/:id', function(req, res, next) {
  res.json({mssg:"Deleted", posts:posts.filter(pos => pos.id !== parseInt(req.params.id))});
});
module.exports = router