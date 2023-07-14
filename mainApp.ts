import express, { Application } from "express"
import cors from "cors"
import task from "./Router/taskRouter"
import done from "./Router/doneTaskRouter"
import complete from "./Router/completeTaskRouter"
import auth from "./Router/authRouter"
import time from "./Router/timeLineRouter"

export const mainApp = (app: Application) =>{
    app.use(express.json()).use(cors())
    .use("/api/v1/task1", task)
    .use("/api/v1/done1", done)
    .use("/api/v1/complete1", complete)
    .use("/api/v1/auth/register", auth)
    .use("/api/v1/time/time-line", time)
}