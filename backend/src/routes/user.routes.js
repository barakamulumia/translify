const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/client",
    [authJwt.verifyToken, authJwt.isClient],
    controller.clientBoard
  );

  app.get(
    "/api/test/driver",
    [authJwt.verifyToken, authJwt.isDriver],
    controller.driverBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
