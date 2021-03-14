const controller = require("../controllers/client.controller");

module.exports = function (app) {
  app.post("/api/clients", controller.create);

  app.get("/api/clients", controller.fetch);

  app.get("/api/clients/:id", controller.get);

  app.delete("/api/clients/:id", controller.delete);
};
