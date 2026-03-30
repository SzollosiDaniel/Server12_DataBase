require("dotenv").config()
const express = require("express")
const cors = require("cors")
const router = require("./router")
const dbHandler = require("./dbHandler")

const server = express()
const PORT = process.env.PORT

server.use(cors()) //1.

server.use(express.json())
server.use(express.static("public"))

server.use(router) //utolsó


server.listen(PORT, () => console.log(`A szerver fut a ${PORT} porton` ))