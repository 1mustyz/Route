var express = require('express');
var router = express.Router();
var users = [{id:1, user:""}]

/* GET users. */
router.get('/', function(req, res, next) {
  res.json(users);
});
router.post('/:id', function(req, res, next) {
  userId = req.params.id;
  var newUsers = req.body;
  users.push(newUsers)
  res.json(users);
});
router.put('/:id', function(req, res, next) {
  var updateUers = req.body;
  userId = req.params.id;
  users.forEach(userr => {
    if (userr.id === parseInt(userId)){
      userr.user = updateUsers.user;
    }
  });
  res.json(users);
});
router.delete('/:id', function(req, res, next) {
  res.json({mssg:"Deleted", users:users.filter(userr => userr.id !== parseInt(req.params.id))});
});
module.exports = router;