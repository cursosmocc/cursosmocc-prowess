import express from "express";
import { getCategories } from "../controller/categories.controller.js";

const router = express.Router();

router.get("/categories", getCategories);

export default router;
