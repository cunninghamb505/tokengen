

var jwt = require('jsonwebtoken');

var payload = {
	api_path: "https://api.zoom.us/v2/",
    iss: "placekeyhere",
    exp: ((new Date()).getTime() + 500000)  //note this expires
};

//Automatically creates header, and returns JWT
var token = jwt.sign(payload, "secret here");
 console.log(token);