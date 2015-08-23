var http = require('http');
var theUrl = process.argv[2];
var theArray = [];
http.get(theUrl, function(response){
    response.setEncoding('utf8');
    response.on('data', function(data) {
        theArray.push(data);
    });
    response.on('error', console.error);
    response.on('end', function(){
        var theString = "";
        var charNum = 0;
     theArray.forEach(function(item) {
      theString += item; 
      charNum += item.length;
    });
    console.log(charNum);
    console.log(theString);
    });
})
