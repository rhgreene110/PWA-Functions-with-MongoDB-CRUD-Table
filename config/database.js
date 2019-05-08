//Import the mongoose module
var mongoose = require('mongoose');
const Schema = mongoose.Schema;
 

//Set up default mongoose connection
var mongoDBurl = 'mongodb://rhg-pwa-db:suCMnGWwwm3Ykg5LD8VzBESIrk9mAKNJ0bVuIvDSXrFWpWrPIENPmwfp5RZyTHt5XxG26uwhzDlJpdc8fFuOmA%3D%3D@rhg-pwa-db.documents.azure.com:10255/RHG-PWA-mongodb-collection?ssl=true';
mongoose.connect(mongoDBurl, { useNewUrlParser: true });
 
//Get the default connection
var db = mongoose.connection;
 
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
 
db.once('open', (callback) => {
    console.log('MongoDB connectted！！');
});
 
//create schema
const heroSchema = new Schema({
        // id: { type: Number, required: true, unique: true },
        name: String,
        message: String,
    },
    { timestamps: true }
);
 
//create model
const Hero = mongoose.model('Hero', heroSchema);
module.exports = Hero;