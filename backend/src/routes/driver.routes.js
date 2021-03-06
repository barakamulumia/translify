const controller = require("../controllers/driver.controller");
const { sift } = require("../middlewares");

module.exports = function (app) {
  app.get("api/drivers/findone", controller.get);

  app.get("/api/drivers/check-verification", controller.check_approval);

  app.post(
    "/api/drivers/complete-registration",
    [
      sift.checkDuplicateUserId,
      sift.checkDuplicateDlno,
      sift.checkDuplicateTruckNo,
    ],
    controller.complete_registration
  );
};
