const db = require("../models");
const Role = db.role;
const User = db.user;
const Driver = db.driver;
const bcrypt = require("bcrypt");

exports.createSampleUsers = function () {
  User.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      const client_role = await Role.findOne({
        name: "client",
      });

      const sample_client = await User.create({
        firstname: "Jayson",
        lastname: "Bourne",
        phoneno: "0723664497",
        email: "jason@gmail.com",
        password: bcrypt.hashSync("123Asd", 10),
        role: client_role._id,
      });

      await sample_client.save();
      console.log("Sample 'Client' Created");

      const driver_role = await Role.findOne({
        name: "driver",
      });

      const sample_driver1 = await User.create({
        firstname: "Salman",
        lastname: "Khan",
        phoneno: "0713213543",
        email: "salmankhan@gmail.com",
        password: bcrypt.hashSync("123Asd", 10),
        role: driver_role._id,
      });

      const sample_driver2 = await User.create({
        firstname: "Aliya",
        lastname: "Bhatt",
        phoneno: "0713213543",
        email: "aliya@gmail.com",
        password: bcrypt.hashSync("123Asd", 10),
        role: driver_role._id,
      });

      const driver1 = await sample_driver1.save();

      const unverified_driver = await Driver.create({
        userId: driver1._id,
        truckno: "KDB 125 Q",
        dlno: "WLX234",
        address: {
          place_name: "Nairobi Kenya",
          place_id: "1234567812345678",
        },
      });
      await unverified_driver.save();
      console.log("Sample Un-Verified 'Driver' Created");
      const driver2 = await sample_driver2.save();

      const verified_driver = await Driver.create({
        userId: driver2._id,
        truckno: "KCX 555 Z",
        dlno: "ZXW456",
        address: {
          place_name: "Nairobi Kenya",
          place_id: "98765432112345678",
        },
        approval_status: "A",
      });
      await verified_driver.save();
      console.log("Sample Verified 'Driver' Created");

      const admin_role = await Role.findOne({
        name: "admin",
      });

      const sample_admin = await User.create({
        firstname: "Priyanka",
        lastname: "Chopra",
        phoneno: "0712345678",
        email: "priyanka@gmail.com",
        password: bcrypt.hashSync("123Asd", 10),
        role: admin_role._id,
      });
      await sample_admin.save();
      console.log("Default 'ADMIN' created");
      console.log("PROCEED.STATUS == 200");
    }
  });
};
