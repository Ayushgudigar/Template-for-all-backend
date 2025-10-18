import dotenv from "dotenv"
import express from "express"
import connectDB from "./db/database.js"
import app from "./app.js"

dotenv.config({
    path:"./.env"
})

const port=process.env.PORT || 3000;

connectDB().then((connected)=>
{
    if(connected){
        console.log("Database connected successfully")
    }
    app.listen(port,()=>
    {
        console.log(`example app Listening on port http://localhost:${port}`)
    })
}).catch((err)=>
{
    console.log("Database connection failed",err)
    app.listen(port,()=>
    {
        console.log(`example app Listening on port http://localhost:${port}`)
    })
})



 