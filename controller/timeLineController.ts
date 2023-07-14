import express, {Response, Request, Application} from "express"
import timeLineModel from "../model/timeLineModel";

export const createTask = async(req: Request, res: Response): Promise<Response>=>{
try {
    const {task, priority} = req.body;
    const tasked = await timeLineModel.create({task, priority})
    return res.status(201).json({message: "Task has been created", data: tasked})
} catch (error) {
     return res.status(404).json({
        message: "Task cannot be created", data: error
    })
}}

export const getTask = async(req: Request, res: Response): Promise<Response>=>{
try {
    // const {task, priority, isComplete} = req.body;
    const tasked = await timeLineModel.find().sort({createdAt: -1})
    return res.status(201).json({message: "Task has been created", data: tasked})
} catch (error) {
     return res.status(404).json({
        message: "Cannot get all Task", data: error
    })
}}

export const getOneTask = async(req: Request, res: Response): Promise<Response>=>{
try {
    const {id} = req.params;
    const tasked = await timeLineModel.findById(id)
    return res.status(201).json({message: "Task has been created", data: tasked})
} catch (error) {
     return res.status(404).json({
        message: "Cannot get all Task", data: error
    })
}}

export const UpdateOneTask = async(req: Request, res: Response): Promise<Response>=>{
try {
    const {id} = req.params;
    const tasked = await timeLineModel.findByIdAndUpdate(
        id,
        {
            isComplete: true,
        },
        {new: true}
    )
    return res.status(201).json({message: "Task has been updated", data: tasked})
} catch (error) {
     return res.status(404).json({
        message: "Cannot update Task", data: error
    })
}}

export const DeleteOneTask = async(req: Request, res: Response): Promise<Response>=>{
try {
    const {id} = req.params;
    const tasked = await timeLineModel.findByIdAndDelete(id)
    return res.status(201).json({message: "Task has been deleted", data: tasked})
} catch (error) {
     return res.status(404).json({
        message: "Cannot delete Task", data: error
    })
}}
