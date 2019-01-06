var controller = function() {
   var get = function(req, res) {
         res.send('test');
      };
   return {
      get: get
   };
};

module.exports = controller;
