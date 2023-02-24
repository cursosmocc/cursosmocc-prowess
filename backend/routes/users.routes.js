import { Router } from "express";
import { createUser, signupUser } from "../controller/user.controller.js";

const router = Router();

router.post("/users", signupUser);

export default router;
