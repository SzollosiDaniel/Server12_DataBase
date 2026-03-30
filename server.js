require("dotenv").config()
const express = require("express")
const cors = require("cors")
const router = require("./router")
const dbHandler = require("./dbHandler")

//dbHandler.weatherType.sync() //akkor hozza létre ha nem lézezik ilyen tábla
//dbHandler.weatherType.sync({alter: true}) //módosítja a táblát ha már létezik, ha nem létezi akkor létrehozza
//dbHandler.weatherType.sync({force: true}) //eldobja a táblát ha létezik és ujra építi, Minent kitöröl!!!!

const server = express()
const PORT = process.env.PORT

server.use(cors()) //1.

server.use(express.json())
server.use(express.static("public"))

server.use(router) //utolsó

server.listen(PORT, () => console.log(`A szerver fut a ${PORT} porton` ))