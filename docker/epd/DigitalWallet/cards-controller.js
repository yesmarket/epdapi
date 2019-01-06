var controller = function() {
   var get = function(req, res) {
         res.send('card');
      };
   return {
      get: get
   };
};

module.exports = controller;
