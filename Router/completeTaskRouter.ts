import express, {Router} from "express"
import { DeleteOneTask, UpdateOneTask, createTask, getOneTask, getTask } from "../controller/completedTaskController";

const router = Router();

router.route("/").get(getTask).post(createTask)

router.route("/:id")
.get(getOneTask).patch(UpdateOneTask).delete(DeleteOneTask)
export default router;

