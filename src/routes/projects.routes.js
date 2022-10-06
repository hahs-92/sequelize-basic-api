import { Router } from "express";
//controllers
import {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  getProjectTasks,
} from "../controllers/projects.controller.js";

const router = Router();

router.get("/projects", getProjects);
router.get("/projects/:id", getProjectById);
router.post("/projects", createProject);
router.put("/projects/:id", updateProject);
router.delete("/projects/:id", deleteProject);

//tareas
router.get("/projects/:id/tasks", getProjectTasks);

export default router;
