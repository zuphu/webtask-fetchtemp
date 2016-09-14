//Author:  Anthony Guevara
//Date:    September 14, 2016
//Purpose: Webtask that returns a temperature string of a city using openweathermap's API
//Usage:   https://github.com/zuphu/webtask-fetchtemp 

//Requires
var request = require('request');

//Global defaults
var APIKEY='27c157be20d31dc2675c425848f71311'
var units='metric'
//Base URL for temperature endpoint
var baseUrl='http://api.openweathermap.org/data/2.5/weather?q='

//Webtask module that is exported
module.exports = function(context, cb) {

	//Check for required parameter
	if ( !context.data.city ) {
		return cb('city paramter is required!');
	}
	var city = context.data.city;

	//Optional parameter, if no API key is set, use default key
	if ( context.data.APIKEY )  {
		APIKEY = context.data.APIKEY;
	}

	//Optional paramter, set units of temperature
	if ( context.data.units )  {
		units = context.data.units;
	}

	//Build API URL endpoint
	var urlQuery = baseUrl + city + '&APPID=' + APIKEY + '&units=' + units;

	//Query endpoint using GET
	request( urlQuery, function ( error, response, body ) {
		if ( error ) return cb(error);//Fail
		if ( !error && response.statusCode == 200 ) {
			body = JSON.parse(body);
			var weather = 'The weather in ' + city + ' is ' + body.main.temp + ' ' + getUnitOfMeasurement();
			return cb(null, weather);//Success
		}
	})
}

//Convert system to temperature unit
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
