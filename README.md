# tokengen
#replace api key and secrets with yours and set your expire time

in postman place below in your headers
{
    "alg": "HS256",
    "typ": "JWT"
}

place below in your payload
{
    "iss": "API_KEY",
    "exp": 1496091964000
}
