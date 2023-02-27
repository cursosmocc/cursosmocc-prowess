import { Router } from "express";
import { signupUser, getUser } from "../controller/user.controller.js";

const router = Router();

router.post("/users", signupUser);
router.get("/users/:username", getUser);

export default router;
