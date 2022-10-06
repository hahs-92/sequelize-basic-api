//en el package.json utiliso type: module
//para poder usar los imports. debo usar la extension js
import app from "./app.js";
import { sequelize } from "./database/database.js";

const PORT = "3000";

async function main() {
  try {
    await sequelize.authenticate();
    app.listen(PORT, () => {
      console.log("Connection has been established successfully.");
      console.log(`Listening in the port: ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
