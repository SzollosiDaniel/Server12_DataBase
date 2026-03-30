const { Sequelize, DataTypes } = require("sequelize")

const dbHandler = new Sequelize("weather", "root", "", {
    host: "127.1.1.1",
    dialect: "mysql",
    //port: 3306 optional => mysql portja
}) 

const table = dbHandler.define("weatherType", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    intensity:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

exports.weatherType = table