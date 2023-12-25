const express = require("express")
const route = express.Router()

route.get("/users" , (req,res) =>{
    res.status(201).send("data sending")
})

route.send("/users" , (req, res) =>{
    let body = req.body
    if(body){
        console.log("Got the data")
        res.status(201).send("getting the data")
    }
})

module.exports = route