const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://gtargino:omnistack@cluster0-an9vd.mongodb.net/devradar?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);
