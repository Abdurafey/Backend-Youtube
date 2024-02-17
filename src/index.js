// require('dotenv').config({path: './env'})
import app from "./app.js"
import connectDB from "./db/index.js"
import dotenv from 'dotenv'

dotenv.config({
    path:'./env'
})

app.get("/",(req,res)=>{
    res.send("Api is working");
});
const port = process.env.PORT || 5000;
connectDB()
.then(()=>{
    app.listen(port, ()=>{
        console.log(`📔 Server is running at port : ${port}`);
        // app.on("error", (error)=>{
        //     console.log("ERRR:", error);
        //     throw error;
        // })
    })
})
.catch((error)=>{
    console.log("MONGO db connection failed!!", error);
})


/*
import express from "express";
const app = express();

(async ()=> {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error", (error)=> {
            console.log("ERR: ", error);
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App running on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw err
        
    }
})*/