import express from "express";
//routes
import projectsRoutes from "./routes/projects.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";

const app = express();

//midlewares
app.use(express.json());
//routes
app.use(projectsRoutes);
app.use(tasksRoutes);

export default app;
