const app = require("../app/app");
require("dotenv").config();

const port = process.env.PORT;
const url = process.env.URL;

const start = async (req, res) => {
  try {
    app.listen(port, () => console.error(`Server is running on : ${url}`));
  } catch (e) {
    console.error(e.message);
  }
};

start();