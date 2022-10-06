//models
import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();

    res.send({ count: projects.length, data: projects });
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id, { include: Task });

    if (project === null) {
      res.status(404).send({
        status: 404,
        message: `El project con el id: ${id} no se encuentra`,
      });
      return;
    }

    res.send(project);
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message });
  }
};

//tareas
export const getProjectTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await Task.findAll({
      where: { projectId: id },
    });
    const project = await Project.findByPk(id);

    if (project === null) {
      res.status(404).send({
        status: 404,
        message: `El project con el id: ${id} no se encuentra`,
      });
      return;
    }

    res.send(tasks);
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

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProject = await Project.destroy({
      where: { id },
    });

    if (deletedProject === 0) {
      res.status(404).send({
        status: 404,
        message: `El project con el id: ${id} no se encuentra`,
      });
      return;
    }

    res.send({ message: `El projecto con el id: ${id} fue destruido` });
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params;
    const { name, description, priority } = body;

    if (!name | !description | !priority) {
      res.status(400).send("Back request!");
      return;
    }

    const projectToUpdate = await Project.findByPk(id);

    if (projectToUpdate === null) {
      res.status(404).send({
        status: 404,
        message: `El project con el id: ${id} no se encuentra`,
      });
      return;
    }

    projectToUpdate.name = name;
    projectToUpdate.priority = priority;
    projectToUpdate.description = description;

    projectToUpdate.save();

    //otra forma de hacerlo
    // await Project.update(
    //   {
    //     name,
    //     description,
    //     priority,
    //   },
    //   { where: { id: id } }
    // );

    res.send({ ...projectToUpdate.dataValues, name, priority, description });
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message });
  }
};
