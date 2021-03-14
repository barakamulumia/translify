const db = require("../models");
const { createSampleUsers } = require("./createSampleUsers");
const Role = db.role;

exports.initializeDB = function () {
  Role.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      const client_role = await Role.create({
        name: "client",
      });
      await client_role.save();
      console.log("Added 'client' to roles collection");

      const driver_role = await Role.create({
        name: "driver",
      });
      await driver_role.save();
      console.log("Added 'driver' to roles collection");

      const admin_role = await Role.create({
        name: "admin",
      });
      await admin_role.save();
      console.log("Added 'admin' to roles collection");

      createSampleUsers();
    }
  });
};
