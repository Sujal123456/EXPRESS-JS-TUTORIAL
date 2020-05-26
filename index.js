const express = require('express');
const app = express();

app.get('/', function(request, response) {
    response.send("GOOD MORNING.");

});
app.listen(700);