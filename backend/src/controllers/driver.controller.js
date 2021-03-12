const db = require("../models");
const User = db.user;
const Driver = db.driver;

exports.completeRegistration = (req, res, next) => {
  const { userId, truckno, dlno, address } = req.body;
  const newDriver = new Driver({
    userId,
    truckno,
    dlno,
    address,
  });

  newDriver.save((err, driver) => {
    if (err) {
      res.status(500).json({
        message: err,
      });
    }
    res.status(200).json({
      message: "Driver Verified",
    });
    next();
  });
};

exports.verifyRegistered = (req, res, next) => {
  const { userid: userId } = req.headers;
  Driver.findOne({ userId }, (err, driver) => {
    if (err) {
      res.status(500).json({
        message: err,
      });
      return;
    }
    if (!driver) {
      res.status(404).json({
        message: "user not found",
      });
      return;
    }
    res.status(200).json({
      id: driver._id,
    });
    next();
  });
};

exports.getDriverById = (req, res, next) => {
  const { driverid: _id } = req.headers;

  Driver.findOne({ _id }, (err, driver) => {
    if (err) {
      res.status(500).json({
        message: err,
      });
      return;
    }

    if (!driver) {
      res.status(404).json({
        message: "driver not found",
      });
      return;
    }

    User.findOne({ _id: driver.userId }, (err, user) => {
      if (err) {
        res.status(500).json({
          message: err,
        });
        return;
      }
      if (!user) {
        res.status(404).json({
          message: "user not found",
        });
        return;
      }

      const { firstname, lastname } = user;
      const { truckno, _id: driverId } = driver;

      res.status(200).json({
        firstname,
        lastname,
        driverId,
        truckno,
      });

      next();
    });
  });
};

exports.getAllDrivers = (_req, res, next) => {
  Driver.find({}, (err, drivers) => {
    if (err) {
      res.status(500).json({
        message: err,
      });
      return;
    }
    if (!drivers) {
      res.status(400).json({
        message: "Drivers not found",
      });
      return;
    }

    res.status(200).json({
      drivers,
    });

    next();
  });
};

/**@todo */
const getNearestDriver = (req, res, next) => {};
