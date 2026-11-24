const e = require("express");
const app = e.Router();

const {
  createApi,
  getApi,
  removeApi,
  updateApi,
  patchApi
} = require("../controller/controller");

app.route("/get").get(getApi);
app.route("/post").post(createApi);
app.route("/put").put(updateApi);
app.route("/patch").patch(patchApi);
app.route("/remove").delete(removeApi);

module.exports = app;
