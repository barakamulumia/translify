const controller = require("../controllers/order.controller");

module.exports = function (app) {
  app.get("/api/orders/user", controller.getAllOrdersByUserId);

  app.post("/api/orders/create", controller.creteOrder);

  app.post("/api/orders/update", controller.updateOrder);
};
