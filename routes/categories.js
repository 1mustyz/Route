var express = require('express');
var router = express.Router();
var categories = [{id:1, category:""}];

/* GET categories. */
router.get('/', function(req, res, next) {
  res.json(categories);
});
router.post('/:id', function(req, res, next) {
  categoryId = req.params.id;
  var newCategories = req.body;
  categories.push(newCategories)
  res.json(categories);
});
router.put('/:id', function(req, res, next) {
  var updateCategories = req.body;
  categoryId = req.params.id;
  categories.forEach(categoryy => {
    if (categoryy.id === parseInt(categoryId)){
      categoryy.category = updateCategories.category;
    }
  });
  res.json(categories);
});
router.delete('/:id', function(req, res, next) {
  res.json({mssg:"Deleted", categories:categories.filter(categoryy => categoryy.id !== parseInt(req.params.id))});
});
module.exports = router;
