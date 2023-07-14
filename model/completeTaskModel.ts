import mongoose from "mongoose"

interface iCompleteTask  {
    task?: string;
    priority?: string;
    isComplete?: boolean;
}

interface iTaskData extends iCompleteTask, mongoose.Document{}

const completeTaskModel = new mongoose.Schema({

    task:{
        type: String,
        trim: true
    },
    priority:{
        type: String,
    },
    isComplete:{
        type: Boolean,
        default: false
    }
}, {timestamps: true})

export default mongoose.model<iTaskData>("completeTask", completeTaskModel)
