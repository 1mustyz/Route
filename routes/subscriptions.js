var express = require('express');
var router = express.Router();
var subscriptions = [{id:1, subscription:""}]

/* GET subscriptions. */
router.get('/', function(req, res, next) {
  res.json(subscriptions);
});
router.post('/:id', function(req, res, next) {
  subscriptionId = req.params.id;
  var newSubscription = req.body;
  subscriptions.push(newSubscription)
  res.json(subscriptions);
});
router.put('/:id', function(req, res, next) {
  updatesubscriptions = req.body;
  subscriptionId = req.params.id;
  subscriptions.forEach(subs => {
    if (subs.id === parseInt(subscriptionId)){
      subs.subscription = updatesubscriptions.subscription;
    }
  });
  res.json(subscriptions);
});
router.delete('/:id', function(req, res, next) {
  res.json({mssg:"Deleted", subscriptions:subscriptions.filter(subs => subs.id !== parseInt(req.params.id))});
});
module.exports = router;