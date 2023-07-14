import express, { Application } from "express"
import mongoose from "mongoose"
import { mainApp } from "./mainApp";
import dotenv from "dotenv"
import { dbConnect } from "./config/database";
dotenv.config();

const realPort = parseInt(process.env.APPLICATION_PORT!)
const port: number = realPort;
const app: Application = express();
mainApp(app);
const server = app.listen(process.env.PORT || port, ()=>{
    dbConnect()
    console.log("connected...!");
})
process.on("unhandledException", (error: any)=>{
    console.log("server is shutting down due to unhandledException");
    console.log(error);
    
    server.close(()=>{
        process.exit(1);   
    })
    
})