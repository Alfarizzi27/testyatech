const mongoose = require('mongoose')
const uri = "mongodb://localhost:27017/klinik"

async function connect() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("mongodb connected");
    } catch (error) {
        console.log(`Error connect config / mongo.js: `, err);
    }
}

module.exports = { connect }

