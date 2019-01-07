var express = require('express');
var yaml = require('yamljs');
var swagger = require('swagger-ui-express');

// var bodyParser = require('body-parser');

var app = express();

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());

app.get('/', function(req, res){
   res.send('working');
});

app.use(express.static('static'));

var routes = require('./routes')();
app.use('/api', routes.paymentGateway);
app.use('/api', routes.digitalWallet);

var options = {
   customCss: 'section.models { display: none; }',
   customJs: '/custom.js'
};

app.use('/api-docs', swagger.serve, swagger.setup(yaml.load('./api.yaml'), options));

var port = process.env.PORT || 8080;
app.listen(port, function(){
	console.log(`Running on port: ${port}`);
});
