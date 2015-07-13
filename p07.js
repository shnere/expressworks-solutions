var express = require('express'),
    path    = require('path'),
    app     = express();

app.get('/search', function(req, res){
    res.send(req.query);
});

app.listen(process.argv[2]);
