import { Router } from "express";
import { createUser } from "../controller/user.controller.js";

const router = Router();

router.post("/users", createUser);

export default router;
