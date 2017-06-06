const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test');

module.export = mongoose.connect;
