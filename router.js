const express = require("express")
const router = express.Router()
const dbHandler = require("./dbHandler")

router.post("/weather", async (req, res) => {
    const { name, intensity, description } = req.body
    if (!name || !intensity) {
        return res.status(400).json({message: "Hiányzó név vagy intenzitás"}).end()
    }

    await dbHandler.weatherType.create({name, intensity, description})

    res.status(201).json({message: "Sikeres létrehozás"})
})

module.exports = router