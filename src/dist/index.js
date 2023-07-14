"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mainApp_1 = require("./mainApp");
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./config/database");
dotenv_1.default.config();
const realPort = parseInt(process.env.APPLICATION_PORT);
const port = realPort;
const app = (0, express_1.default)();
(0, mainApp_1.mainApp)(app);
const server = app.listen(process.env.PORT || port, () => {
    (0, database_1.dbConnect)();
    console.log("connected...!");
});
process.on("unhandledException", (error) => {
    console.log("server is shutting down due to unhandledException");
    console.log(error);
    server.close(() => {
        process.exit(1);
    });
});
