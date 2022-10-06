import { Router } from "express";
//controllers
import {
  getProjects,
  createProject,
} from "../controllers/projects.controller.js";

const router = Router();

router.get("/projects", getProjects);
router.get("/projects/:id");
router.post("/projects", createProject);
router.put("/projects/:id");
router.delete("/projects/:id");

export default router;
