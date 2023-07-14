"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTask = exports.UpdateOneTask = exports.getOneTask = exports.getTask = exports.createTask = void 0;
const doneTaskModel_1 = __importDefault(require("../model/doneTaskModel"));
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { task, priority, isComplete } = req.body;
        const tasked = yield doneTaskModel_1.default.create({ task, priority, isComplete });
        return res.status(201).json({ message: "Task has been created", data: tasked });
    }
    catch (error) {
        return res.status(404).json({
            message: "Task cannot be created", data: error
        });
    }
});
exports.createTask = createTask;
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const {task, priority, isComplete} = req.body;
        const tasked = yield doneTaskModel_1.default.find().sort({ createdAt: -1 });
        return res.status(201).json({ message: "Task has been created", data: tasked });
    }
    catch (error) {
        return res.status(404).json({
            message: "Cannot get all Task", data: error
        });
    }
});
exports.getTask = getTask;
const getOneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tasked = yield doneTaskModel_1.default.findById(id);
        return res.status(201).json({ message: "Task has been created", data: tasked });
    }
    catch (error) {
        return res.status(404).json({
            message: "Cannot get all Task", data: error
        });
    }
});
exports.getOneTask = getOneTask;
const UpdateOneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tasked = yield doneTaskModel_1.default.findByIdAndUpdate(id, {
            isComplete: true,
        }, { new: true });
        return res.status(201).json({ message: "Task has been updated", data: tasked });
    }
    catch (error) {
        return res.status(404).json({
            message: "Cannot update Task", data: error
        });
    }
});
exports.UpdateOneTask = UpdateOneTask;
const DeleteOneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tasked = yield doneTaskModel_1.default.findByIdAndDelete(id);
        return res.status(201).json({ message: "Task has been deleted", data: tasked });
    }
    catch (error) {
        return res.status(404).json({
            message: "Cannot delete Task", data: error
        });
    }
});
exports.DeleteOneTask = DeleteOneTask;
