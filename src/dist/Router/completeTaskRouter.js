"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const completedTaskController_1 = require("../controller/completedTaskController");
const router = (0, express_1.Router)();
router.route("/").get(completedTaskController_1.getTask).post(completedTaskController_1.createTask);
router.route("/:id")
    .get(completedTaskController_1.getOneTask).patch(completedTaskController_1.UpdateOneTask).delete(completedTaskController_1.DeleteOneTask);
exports.default = router;
