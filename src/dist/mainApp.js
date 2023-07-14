"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const taskRouter_1 = __importDefault(require("./Router/taskRouter"));
const doneTaskRouter_1 = __importDefault(require("./Router/doneTaskRouter"));
const completeTaskRouter_1 = __importDefault(require("./Router/completeTaskRouter"));
const authRouter_1 = __importDefault(require("./Router/authRouter"));
const timeLineRouter_1 = __importDefault(require("./Router/timeLineRouter"));
const mainApp = (app) => {
    app.use(express_1.default.json()).use((0, cors_1.default)())
        .use("/api/v1/task1", taskRouter_1.default)
        .use("/api/v1/done1", doneTaskRouter_1.default)
        .use("/api/v1/complete1", completeTaskRouter_1.default)
        .use("/api/v1/auth/register", authRouter_1.default)
        .use("/api/v1/time/time-line", timeLineRouter_1.default);
};
exports.mainApp = mainApp;
