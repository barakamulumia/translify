const controller = require("../controllers/driver.controller");
const { verifyXpressDriver: auth } = require("../middlewares");

module.exports = function (app) {
  app.get("/api/drivers/all", controller.getAllDrivers);

  app.get("/api/drivers/findone", controller.getDriverById);

  app.get("/api/drivers/check-verification", controller.verifyRegistered);

  app.post(
    "/api/drivers/complete-registration",
    [
      auth.checkDuplicateUserId,
      auth.checkDuplicateDlno,
      auth.checkDuplicateTruckNo,
    ],
    controller.completeRegistration
  );
};
