const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();


// Parse body to Json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Models and Routes
require('./models/User');
require('./config/passport');
app.use(require('./routes'));


app.listen(process.env.PORT, () => console.log('Prometheus-EDU API is listening'));

module.exports = app;
