//si lo importara como sequlized seria una instancia
import { Sequelize } from "sequelize";

//database - username - password
export const sequelize = new Sequelize(
  "projectsDB",
  "postgres",
  "TravelMate2420",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
