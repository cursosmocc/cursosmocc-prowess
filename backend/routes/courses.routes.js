import express from "express";
import {
  getCourses,
  getCoursesByCategory,
  getCourse,
} from "../controller/courses.controller.js";

const router = express.Router();

router.get("/courses", getCourses);
router.get("/courses/category/:id", getCoursesByCategory);
router.get("/courses/:id", getCourse);

export default router;
