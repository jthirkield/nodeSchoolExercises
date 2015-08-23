var fs = require('fs');
var theFile = process.argv[2];
var numLines = 0;
//async -- file read
fs.readFile(theFile, function callback(err,data){
    if (err) throw err;
    var text = data.toString();
    var line = text.split('\n');
    numLines = line.length-1;
    console.log(numLines);
})

