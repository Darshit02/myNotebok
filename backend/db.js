const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/myNotebbok"
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}
module.exports = connectToMongo;