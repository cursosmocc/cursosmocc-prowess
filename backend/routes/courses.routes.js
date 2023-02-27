import express from "express";
import {
  getCourses,
  getCoursesByCategory,
  getCourse,
  enrolUser,
} from "../controller/courses.controller.js";

const router = express.Router();

router.get("/courses", getCourses);
router.get("/courses/category/:id", getCoursesByCategory);
router.get("/courses/:id", getCourse);
router.post("/courses/enrol", enrolUser);

export default router;
