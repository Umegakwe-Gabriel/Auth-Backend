"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskController_1 = require("../controller/taskController");
const router = (0, express_1.Router)();
router.route("/").get(taskController_1.getTask).post(taskController_1.createTask);
router.route("/:id")
    .get(taskController_1.getOneTask).patch(taskController_1.UpdateOneTask).delete(taskController_1.DeleteOneTask);
exports.default = router;
