import { DataTypes } from "sequelize";
//nos traemos la instancia se sequelized
import { sequelize } from "../database/database.js";
//nos traemos el modelo de tasks para hacer la relacion
import { Task } from "./Task.js";

//el schema del project
export const Project = sequelize.define(
  "projects",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING },
    priority: { type: DataTypes.INTEGER },
    description: { type: DataTypes.STRING },
  },
  {
    //opciones
    //eliminaria el timestamps que agrega por defecto
    //timestamps: false
  }
);

//relaciones
Project.hasMany(Task, {
  foreignKey: "projectId", //en task crea esta llave
  sourceKey: "id", // y la relaciona con el id del projecto
});

Task.belongsTo(Project, {
  foreignKey: "projectId",
  targetKey: "id",
  // onDelete: "CASCADE",
});
