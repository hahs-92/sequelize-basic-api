//models
import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();

    res.send({ count: tasks.length, data: tasks });
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);

    if (task === null) {
      res.status(404).send({
        status: 404,
        message: `El task con el id: ${id} no se encuentra`,
      });
      return;
    }

    res.send(task);
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { name, done, projectId } = req.body;

    if (!name) {
      res.status(400).send("Back request!");
      return;
    }

    const createdTask = await Task.create({
      name,
      done,
      projectId,
    });

    res.status(201).send(createdTask);
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await Task.destroy({ where: { id } });

    if (deletedTask === 0) {
      res.status(404).send({
        status: 404,
        message: `La tarea con el id: ${id} no se encuentra`,
      });
      return;
    }

    res.send({ message: `La task con el id: ${id} fue destruido` });
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message });
  }
};

export const updateTask = async (req, res) => {
  //tambien podriamos usar set
  try {
    const { body } = req;
    const { id } = req.params;
    const { name, done } = body;

    if (!name) {
      res.status(400).send("Back request!");
      return;
    }

    const taskToUpdate = await Task.findByPk(id);

    if (taskToUpdate === null) {
      res.status(404).send({
        status: 404,
        message: `La tarea con el id: ${id} no se encuentra`,
      });
      return;
    }

    taskToUpdate.name = name;
    taskToUpdate.done = done;
    taskToUpdate.save();

    res.send({ ...taskToUpdate.dataValues, name, done });
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message });
  }
};
