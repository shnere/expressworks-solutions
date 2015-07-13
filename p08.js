var express = require('express'),
    path    = require('path'),
    fs      = require('fs'),
    app     = express();

app.get('/books', function(req, res){
    fs.readFile(process.argv[3], function(err, data){
        if(err){
            return res.sendStatus(500);
        }
        return res.send(JSON.parse(data));
    });
});

app.listen(process.argv[2]);
