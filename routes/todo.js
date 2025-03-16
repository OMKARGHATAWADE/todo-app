import express from "express";
import {
  createTodo,
  deleteTodo,
  updateById,
} from "../controllers/createTodo.js";
import { getById, getTodo } from "../controllers/getTodo.js";

const router = express.Router();

router.route("/createTodo").post(createTodo);
router.route("/getTodo").get(getTodo);
router.route("/getById/:id").get(getById);
router.route("/update/:id").put(updateById);
router.route("/delete/:id").delete(deleteTodo);

export default router;
