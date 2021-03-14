const controller = require("../controllers/client.controller");

module.exports = function (app) {
  app.get("/api/clients/findone", controller.get);
};
