var http = require('http');
var theUrl = process.argv[2];

http.get(theUrl, function(response){
    response.setEncoding('utf8');
    response.on('data', function(data) {
        console.log(data);
    });
    response.on('error', console.error);
})