var url = require('url');
var http = require('http');
var port = process.argv[2];
var filePath = "/api/parsetime";

var server = http.createServer(function(req,res){
    var queryData = url.parse(req.url, true).query;
    var queryPath = url.parse(req.url, true).pathname;
    if (req.method != 'GET') {
        return res.end();
    }
    if (queryPath == "/api/unixtime") {
            res.end(unixTime(queryData.iso));
    }
    res.end(theTime(queryData.iso));
});

server.listen(port);

function theTime(theData) {
    var d = new Date(theData);
    var thisTime = new Object();
    thisTime.hour =  d.getHours();
    thisTime.minute = d.getMinutes();
    thisTime.second = d.getSeconds();
    return JSON.stringify(thisTime);
}
function unixTime(theData) {
    var d = new Date(theData);
    var justTime = new Object();
    justTime.unixtime =  d.getTime();
    return JSON.stringify(justTime);
}