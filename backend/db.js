const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/myNotebook"
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}
module.exports = connectToMongo;