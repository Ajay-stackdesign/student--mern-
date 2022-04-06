const mongoose = require("mongoose")

const database = () => {
    mongoose.connect(`${process.env.DB_URL}`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        .then(() => {
            console.log("connected to database")
        }).catch((err) => {
            console.log(err)
        })
}


module.exports = database