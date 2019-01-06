var routes = function() {
   var paymentGatewayRoutes = require('./PaymentGateway/routes')();
   var digitalWalletRoutes = require('./DigitalWallet/routes')();
   return {
      paymentGateway: paymentGatewayRoutes,
      digitalWallet: digitalWalletRoutes
   }
};

module.exports = routes;
