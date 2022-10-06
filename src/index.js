//en el package.json utiliso type: module
//para poder usar los imports. debo usar la extension js
import app from "./app.js";
import { sequelize } from "./database/database.js";

//traemos el sechema para que sequelize sepa que lo vamos a utiliozar
//para crear nuestras tabalas
import "./models/Project.js";
import "./models/Task.js";

const PORT = "3000";

async function main() {
  try {
    // await sequelize.authenticate();
    // hace una sincronizacion con la DB
    //si no existe una tabla nos crea una llamda projects
    await sequelize.sync({ force: true }); //{force: true} elimina la tabla si existe;
    app.listen(PORT);
    console.log(`Listening in the port: ${PORT}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
