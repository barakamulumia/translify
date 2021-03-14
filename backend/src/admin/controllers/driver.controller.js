const bcrypt = require("bcrypt");
const db = require("../../models");
const User = db.user;
const Role = db.role;
const Driver = db.driver;

module.exports = {
  create: (req, res) => {},
  fetch: async (req, res) => {
    const driver_role = await Role.findOne({
      name: "driver",
    });

    if (!driver_role) {
      res.status(404).json({
        message: "Role Not Found",
      });
      return;
    }

    const users = await User.find({
      role: driver_role.id,
    });

    if (!users) {
      res.status(404).json({
        message: "Drivers Not Found",
      });
      return;
    }
    const drivers = await Promise.all(
      users.map(async (user) => {
        const exists = await Driver.findOne({
          userId: user._id,
        });
        function format_approval(value) {
          switch (value) {
            case "A":
              return "Approved";
            case "D":
              return "Declined";
            case "P":
            default:
              return "Pending";
          }
        }
        if (exists) {
          return {
            id: exists._id,
            userid: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            phoneno: user.phoneno,
            email: user.email,
            rating: user.rating,
            truckno: exists.truckno,
            dlno: exists.dlno,
            address: exists.address.place_name,
            approval_status: format_approval(exists.approval_status),
            created_at: new Date(exists.dateOfReg),
          };
        }
      })
    );
    res.set("Content-Range", drivers.length);
    res.status(200).json(drivers);
  },

  get: async (req, res) => {
    const driver_id = req.params.id;

    const driver = await Driver.findOne({
      _id: driver_id,
    });

    if (!driver) {
      res.status(404).json({
        message: "Driver Not Found",
      });
      return;
    }

    const user = await User.findOne({
      userId: driver.userId,
    });

    if (!user) {
      res.status(404).json({
        message: "User Not Found",
      });
      return;
    }

    res.status(200).json({
      id: driver._id,
      userid: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      phoneno: user.phoneno,
      email: user.email,
      rating: user.rating,
      truckno: driver.truckno,
      dlno: driver.dlno,
      address: driver.address.place_name,
      approval_status: format_approval(driver.approval_status),
      created_at: new Date(driver.dateOfReg),
    });
  },
  update: (req, res) => {},

  delete: (req, res) => {},
};
