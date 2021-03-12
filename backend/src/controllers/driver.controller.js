const db = require("../models");
const User = db.user;
const Driver = db.driver;

/**
 * Submit additional details of a driver
 * @param {Object} req
 * @param {Object} res
 * @param {function} next
 */
exports.complete_registration = (req, res, next) => {
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
      message: "Registration Successfull Pending Approval",
    });
    next();
  });
};

/**
 *check drivers approval status
 * @param {Object} req
 * @param {Object} res
 * @param {function} next
 */
exports.check_approval = (req, res, next) => {
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
        auth_state: 404,
      });
      return;
    }

    switch (driver.authourization.status) {
      case "Declined":
        res.status(200).json({
          auth_state: 401,
        });
        break;
      case "Pending":
        res.status(200).json({
          auth_state: 202,
        });
        break;
      case "Approved":
        res.status(201).json({
          auth_state: 201,
          auth_token: driver.authourization.token,
        });
        break;
      default:
        res.status(200).json({
          status: 202,
        });
        break;
    }
    next();
  });
};

/**
 *get a single driver
 * @param {Object} req
 * @param {Object} res
 * @param {function} next
 */

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
