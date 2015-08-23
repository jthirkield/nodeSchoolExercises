var http = require('http');
var theUrls = [process.argv[2], process.argv[3], process.argv[4]];
var counter = 0; 
var allTheData = []

function getOutputs(url, theIndex) {
http.get(url, function(response){
    var thisData = '';
    response.setEncoding('utf8');
    response.on('data', function(data) {
        thisData += data;
    });
    response.on('error', console.error);
    response.on('end', function(){
        counter++;
        allTheData[theIndex] = thisData;
        if (counter == 3) {
            allTheData.forEach(function(item) {
                console.log(item);
            });
        }
    
    });
});
}

for (var i=0; i < theUrls.length; i++) {
    getOutputs(theUrls[i],i);
}