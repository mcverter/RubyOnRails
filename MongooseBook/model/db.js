var mongoose = require('mongoose'),
  dbURI = 'mongodb://localhost/MongoosePM';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
    console.log('mongoose connected to ' + dbURI;
});

mongoose.connection.on('error', function(err) {
    console.log('mongoose connection error: ' + err;
});

mongoose.connection.on('disconnected', function() {
    console.log('mongoose disconnected ');
});

mongoose.connection.close(function() {
    console.log('Mongoose default connection closed');
});


process.on('SIGINT', function() {
    mongoose.connection.close(function() {
	console.log('Mongoose disconnected through app termination');
	process.exit(0);
    });
});