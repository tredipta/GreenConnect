const express = require('express');
const app = express();
const port = 8000;

// using express router
app.use('/', require('./routes/index'));

app.listen(port, function(e) {
    if (e) {
        // ${e} -> this known as interpolation
        console.log(`Error in server ${e}`);
    }
    console.log(`Server is running on port: ${port}`);
}) 