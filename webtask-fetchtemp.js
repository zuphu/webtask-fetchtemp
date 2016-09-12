//Requires
var request = require('request');

//Globals
var APIKEY='27c157be20d31dc2675c425848f71311'
var units='metric'

//Webtask to query 
module.exports = function(context, cb) {
	if ( !context.data.city ) {
		return cb('city paramter is required!');
	}
	var city = context.data.city;

	if ( context.data.APIKEY )  {
		APIKEY = context.data.APIKEY;
	}

	if ( context.data.units )  {
		units = context.data.units;
	}

	var urlQuery = 'http://api.openweathermap.org/data/2.5/weather?q=' + city +
								'&APPID=' + APIKEY +
								'&units=' + units;
	request( urlQuery, function ( error, response, body ) {
		if ( error ) return cb(error);
		if ( !error && response.statusCode == 200 ) {
			body = JSON.parse(body);
			var weather = 'The weather in ' + city + ' is ' + body.main.temp + ' ' + getUnitOfMeasurement();
			return cb(null, weather);
		}
	})
}

var getUnitOfMeasurement = function() {
	switch (units.toLowerCase()) {
		case 'imperial':
			return 'Fahrenheit'
			break;
		case 'metric':
			return 'Celsius'
			break;
		case 'kelvin':
			return 'Kelvin'
			break;
	}
}
