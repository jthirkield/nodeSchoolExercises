var fs = require('fs');
var theFile = process.argv[2];
var theText = fs.readFileSync(theFile).toString();
var theLines = theText.split('\n');
console.log(theLines.length-1);
