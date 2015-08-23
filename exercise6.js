var myModule = require('./myModule.js');
var dir = process.argv[2];
var ext = process.argv[3];

function myCallback(error, Filelist) {
    Filelist.forEach(function(item) {
      console.log(item);  
    })
}

myModule(dir, ext, myCallback);