const app = require("./app")

const dotenv = require("dotenv")

// handling uncaught exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
});
dotenv.config({ path: "backend/config/.env" })
const database = require("./config/database")



database()
// app.use("/", (req, res) => {
//     res.send("hwllo world")
// })






const server = app.listen(`${process.env.PORT}`, () => {
    console.log(`server is working on ${process.env.PORT}`)
})

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    });
});





