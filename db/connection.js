const mongoose = require('mongoose');

let mongoDB = "mongodb+srv://azim763:Azim@763@cluster0.whxcgwf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

////EXAMPLE////
// Make sure to create .env file and use an environment variable

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;
