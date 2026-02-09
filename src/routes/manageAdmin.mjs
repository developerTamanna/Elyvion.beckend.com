import { Router } from "express";
import { getUsers, getUserById, loginUser } from "../controllers/userController.js";

const router = Router();
router.post("/login", loginUser);
router.get("/", getUsers);
router.get("/:id", getUserById);

export default router;
