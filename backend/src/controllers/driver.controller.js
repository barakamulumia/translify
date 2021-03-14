const db = require("../models");
const User = db.user;
const Driver = db.driver;

module.exports = {
  complete_registration: async (req, res, next) => {
    const { userId, truckno, dlno, address } = req.body;

    const newDriver = await Driver.create({
      userId,
      truckno,
      dlno,
      address,
    });

    const is_save = newDriver.save();
    if (!is_save) {
      res.status(500).json({
        message: is_save.errors,
      });
    }

    res.status(200).json({
      message: "Registartion successfull",
    });

    next();
  },

  check_approval: async (req, res) => {
    const { userid: userId } = req.headers;

    const driver = await Driver.findOne({
      userId,
    });

    if (!driver) {
      res.status(404).json({
        message: "Driver not found",
      });
      return;
    }

    res.status(200).json(driver);
  },

  get: async (req, res) => {
    console.log(req.headers);

    const id = req.headers.id;
    const driver = await Driver.findById(id);

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
};
