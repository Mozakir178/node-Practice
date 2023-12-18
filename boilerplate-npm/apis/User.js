const express = require("express")
const route = express.Router()

route.get("/users" , (req,res) =>{
    res.status(201).send("data sending")
})


module.exports = route