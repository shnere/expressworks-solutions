var express = require('express'),
    app     = express();

app.use(express.static(process.argv[3]));
app.use(require('stylus').middleware(process.argv[3]));

app.listen(process.argv[2]);
