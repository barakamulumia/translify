const db = require("../models");
const User = db.user;

exports.allAccess = (_req, res) => {
  res.status(200).json({
    content: "Public content",
  });
};

exports.driverBoard = (req, res) => {
  User.findOne(
    {
      _id: req.userId,
    },
    (err, driver) => {
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
      res.status(200).json({
        userId: driver._id,
        role: "driver",
      });
    }
  );
};

exports.clientBoard = (req, res) => {
  User.findOne(
    {
      _id: req.userId,
    },
    (err, client) => {
      if (err) {
        res.status(500).json({
          message: err,
        });
        return;
      }
      if (!client) {
        res.status(404).json({
          message: "orders not found",
        });
        return;
      }
      res.status(200).json({
        userId: client._id,
        role: "client",
      });
    }
  );
};

exports.adminBoard = (_req, res) => {
  res.status(200).json({
    content: "Admin content",
  });
};
