const express = require("express");
const path = require("path");

const app = express();
const port = 4000;

app.use('/static', express.static('static'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.status(200).render('index');
});

app.listen(port, () => {
    console.log(`App started on port ${port}`);
});