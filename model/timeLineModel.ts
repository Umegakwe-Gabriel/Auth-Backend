import mongoose from "mongoose"

interface iTimeLineModel  {
    task?: string;
    priority?: string;
}

interface iTimeModel extends iTimeLineModel, mongoose.Document{}

const iTimeLineModels = new mongoose.Schema({

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

export default mongoose.model<iTimeModel>("time", iTimeLineModels)
