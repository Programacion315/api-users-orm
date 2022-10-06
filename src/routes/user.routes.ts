import { Router } from "express";
import {
  createUser,
  getUsers,
  updateUser,
} from "../controllers/users.controllers";

const router = Router();

router.post("/users", createUser);

router.get("/users", getUsers);

router.put("/users/:id", updateUser);

export default router;
