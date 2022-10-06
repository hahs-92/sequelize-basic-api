//models
import { Project } from "../models/Project.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();

    res.send({ count: projects.length, data: projects });
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message });
  }
};

export const createProject = async (req, res) => {
  try {
    const { name, description, priority } = req.body;

    if (!name | !description | !priority) {
      res.status(400).send("Back request!");
      return;
    }

    const createdProject = await Project.create({
      name,
      description,
      priority,
    });

    res.status(201).send(createdProject);
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message });
  }
};
