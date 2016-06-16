var keys = require('./keys.js'); // imporys twitter keys
var Twitter = require('twitter'); //connects to your twitter
var spotify = require('spotify'); //spotify api
var request = require('request'); //allows api requests
var fs = require('fs'); //reads and writes files

var getArtistName = artist => { return artist.name};