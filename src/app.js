import express from "express";
//routes
import projectsRoutes from "./routes/projects.routes.js";

const app = express();

//midlewares
app.use(express.json());
//routes
app.use(projectsRoutes);

export default app;
