require("dotenv").config()
const express = require("express")
const tasks = require("./routes/tasks")
const connectDB = require("./models/connect")
const app = express()
const notFound = require("./middleware/not_found")
const errorHandlerMiddleware = require("./middleware/error_handler")


const port = 3000

app.use(express.static("./public"))
app.use(express.json())

app.use(`/api/${process.env.API_VERSION}/tasks`, tasks)
app.use(notFound)

app.use(errorHandlerMiddleware)


const start = async () => {
    try {
        await connectDB(process.env.MONGO_DB_URI)
        // noinspection JSCheckFunctionSignatures,JSVoidFunctionReturnValueUsed
        app.listen(port, console.log(`server is listening on port ${process.env.PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start().then((err) => {console.log(err)})
