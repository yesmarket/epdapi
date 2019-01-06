var express = require('express');

var routes = function() {
   var router = express.Router();
   var controller = require('./payments-controller')();
   router.route('/payments')
      .get(controller.get);
   return router;
};

module.exports = routes;
