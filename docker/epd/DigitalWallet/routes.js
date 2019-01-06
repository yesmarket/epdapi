var express = require('express');

var routes = function() {
   var router = express.Router();
   var controller = require('./cards-controller')();
   router.route('/cards')
      .get(controller.get);
   return router;
};

module.exports = routes;
