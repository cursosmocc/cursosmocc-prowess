import express from "express";
import cors from "cors";
import coursesRoutes from "./routes/courses.routes.js";
import categoriesRoutes from "./routes/categories.routes.js";
import usersRoutes from "./routes/users.routes.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/mocc", coursesRoutes);
app.use("/mocc", categoriesRoutes);
app.use("/mocc", usersRoutes);

export default app;
