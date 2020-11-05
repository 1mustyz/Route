var express = require('express');
var router = express.Router();
var advertisements = [{id:1, advert:""}]

/* GET advertisements. */
router.get('/', function(req, res, next) {
  res.json(advertisements);
});
router.post('/:id', function(req, res, next) {
  advertId = req.params.id;
  var newAdvertisements = req.body;
  advertisements.push(newAdvertisements);
  res.json(advertisements);
});
router.put('/:id', function(req, res, next) {
  updateadvertisements = req.body;
  advertId = req.params.id;
  advertisements.forEach(advertise => {
    if (advertise.id === parseInt(advertId)){
      advertise.advert = updateadvertisements.advert;
    }
  });
  res.json(advertisements);
});
router.delete('/:id', function(req, res, next) {
  res.json({mssg:"Deleted", advertisements:advertisements.filter(advertt => advertt.id !== parseInt(req.params.id))});
});
module.exports = router;