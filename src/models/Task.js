import { DataTypes } from "sequelize";
//nos traemos la instancia se sequelized
import { sequelize } from "../database/database.js";

//el schema para crear nuestra db
export const Task = sequelize.define(
  "tasks",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING },
    done: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  {
    //opciones
    //eliminaria el timestamps que agrega por defecto
    //timestamps: false
  }
);
