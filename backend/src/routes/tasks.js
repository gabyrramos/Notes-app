import { getTasks, getTaskById, postTask, editTask, deleteTask } from "../controller/tasks.controller.js";
import { Router } from "express";

const router = Router();

router.get('/', getTasks);
router.get('/:id', getTaskById);
router.post('/', postTask);
router.put('/:id', editTask);
router.delete('/:id', deleteTask);

export default router;