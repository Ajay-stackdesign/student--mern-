const express = require("express")

const app = express()

app.use(express.json());

const studentRoute = require("./routes/studentRoute")


app.use("/api/v1", studentRoute)



module.exports = app
