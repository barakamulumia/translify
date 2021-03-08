const bcrypt = require("bcrypt");
const db = require("../../models");
const User = db.user;
const Role = db.role;

module.exports = {
  create: (req, res) => {},
  fetch: (req, res) => {
    Role.findOne(
      {
        name: "driver",
      },
      (err, role) => {
        if (err) {
          res.status(500).json({
            message: err,
          });
          return;
        }
        if (!role) {
          res.status(404).json({
            message: "Role Not Found",
          });
          return;
        }
        User.find(
          {
            role: role._id,
          },
          (err, drivers) => {
            if (err) {
              res.status(500).json({
                message: err,
              });
              return;
            }
            if (!drivers) {
              res.status(404).json({
                message: "Drivers Not Found",
              });
              return;
            }
            res.set("content-range", drivers.length);
            const response = drivers.map((driver) => {
              const {
                rating,
                _id: id,
                firstname,
                lastname,
                phoneno,
                email,
              } = driver;
              return {
                id,
                firstname,
                lastname,
                phoneno,
                email,
                role: "driver",
                rating,
              };
            });
            res.status(200).json(response);
          }
        );
      }
    );
  },

  get: (req, res) => {},
  update: (req, res) => {},
  delete: (req, res) => {},
};
