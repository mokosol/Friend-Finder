var express = require("express");

const app = express();

app.get('/', (req, res) =>{

    res.send('Hello World !!!');

});
app.get('/api/courses', (req, res) =>{

    res.send([1,2,3]);

});

//ports

process.env.port || 3000;

app.listen(port, () => console.log(`listening on port ${port}...`));