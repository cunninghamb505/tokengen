var jwt = require('jsonwebtoken');

var payload = {
    iss: api_key,
    exp: ((new Date()).getTime() + 500000)
};

//Automatically creates header, and returns JWT
var token = jwt.sign(payload, api_secret);