var fs = require('fs');
var path = require('path');

function filterFiles(dir, ext, callback) {
    var filteredList = [];
    fs.readdir(dir, function(err,data){
           if (err) return callback(err);
    for(var i= 0; i < data.length; i++) {
        if (path.extname(data[i]) === '.' + ext){
            filteredList.push(data[i]);
        }
    }
    callback(null,filteredList);
    })
    
}

module.exports = filterFiles;
