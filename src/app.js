const { dirname } = require("path");
const app = require("./config/express");

const routes = require("./routes");

app.use("/", routes);

module.exports = app;