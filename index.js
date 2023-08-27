const express = require('express');
const app = express();
const port = 8000;

app.listen(port, function(e) {
    if (e) {
        // ${e} -> this known as interpolation
        console.log(`Error in server ${e}`);
    }
    console.log(`Server is running on port: ${port}`);
}) 