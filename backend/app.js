const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const routes = require('./routers/content');
app.use(routes);

app.listen(8080, () => {
    console.log("it's okey!");
});
