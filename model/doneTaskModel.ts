import mongoose from "mongoose"

interface iDoneTask  {
    task?: string;
    priority?: string;
    isComplete?: boolean;
}

interface iTaskData extends iDoneTask, mongoose.Document{}

const doneTaskModel = new mongoose.Schema({

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

export default mongoose.model<iTaskData>("doneTasks", doneTaskModel)
