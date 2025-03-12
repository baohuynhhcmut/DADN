var express = require('express')
var cors = require('cors')
var app = express()
var ConnectDatabase = require("./src/config/db")
var Route = require("./src/routes/index")

app.use(cors())
app.use(express.json())

// Connect to mongodb server
ConnectDatabase()

// Create app route for fetching API
Route(app)

const PORT = process.env.PORT || 8080

app.listen(PORT,() => {
    console.log(`App listen on port ${PORT}`)
})
