const db = require("../models");
const Driver = db.driver;

const checkDuplicateUserId = (req, res, next) => {
  const { userId } = req.body;

  Driver.findOne(
    {
      userId,
    },
    (err, driver) => {
      if (err) {
        res.status(500).json({ message: err });
        return;
      }
      if (driver) {
        res.status(400).json({
          message: "driver has already been registered",
        });
        return;
      }
      next();
    }
  );
};

const checkDuplicateTruckNo = (req, res, next) => {
  const { truckno } = req.body;
  Driver.findOne(
    {
      truckno,
    },
    (err, driver) => {
      if (err) {
        res.status(500).json({ message: err });
        return;
      }
      if (driver) {
        res.status(400).json({
          message: "truck " + truckno + " is already registered",
        });
        return;
      }
      next();
    }
  );
};

const checkDuplicateDlno = (req, res, next) => {
  const { dlno } = req.body;
  Driver.findOne(
    {
      dlno,
    },
    (err, driver) => {
      if (err) {
        res.status(500).json({ message: err });
        return;
      }
      if (driver) {
        res.status(400).json({
          message: "the licence no " + dlno + " is already registered ",
        });
        return;
      }
      next();
    }
  );
};

module.exports = {
  checkDuplicateDlno,
  checkDuplicateTruckNo,
  checkDuplicateUserId,
};
