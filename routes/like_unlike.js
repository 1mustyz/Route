var express = require('express');
var router = express.Router();
var like_unlike = [{id:1, num:""}]

/* GET like_unlike. */
router.get('/', function(req, res, next) {
  res.json(like_unlike);
});
router.post('/:id', function(req, res, next) {
  likeId = req.params.id;
  var new_like_unlike = req.body;
  like_unlike.push(new_like_unlike);
  res.json(like_unlike);
});
router.put('/:id', function(req, res, next) {
  var updatelike_unlike = req.body;
  likeId = req.params.id;
  like_unlike.forEach(like => {
    if (like.id === parseInt(likeId)){
      like.num = updatelike_unlike.num;
    }
  });
  res.json(like_unlike);
});
router.delete('/:id', function(req, res, next) {
  res.json({mssg:"Deleted", like_unlike:like_unlike.filter(like => like.id !== parseInt(req.params.id))});
});
module.exports = router;