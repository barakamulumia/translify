const controller = require("../controllers/driver.controller");

module.exports = function (app) {
  app.post("/api/drivers", controller.create);

  app.get("/api/drivers", controller.fetch);

  app.get("/api/drivers/:id", controller.get);

  app.put("/api/drivers/:id", controller.update);

  app.delete("/api/drivers/:id", controller.delete);
};
