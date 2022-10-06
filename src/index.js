//en el package.json utiliso type: module
//para poder usar los imports
import app from "./app.js";

const PORT = "3000";

app.listen(PORT, () => {
  console.log(`Listening in the port: ${PORT}`);
});
