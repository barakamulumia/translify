const bcrypt = require("bcrypt");
const db = require("../../models");
const User = db.user;
const Role = db.role;
const Driver = db.driver;

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
            res.set("Content-Range", drivers.length);
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
                rating,
              };
            });

            Promise.all(
              response.map((driver) =>
                Driver.findOne({
                  userId: driver.id,
                })
              )
            ).then((driver) => {
              const get_driver = (x) => x === String(driver[0].userId);
              const truck_driver = response.find(
                (d) => String(d.id) === String(driver[0].userId)
              );
              console.log(driver[0].authourization);

              console.log({
                id: truck_driver.id,
                firstname: truck_driver.firstname,
                lastname: truck_driver.lastname,
                phoneno: truck_driver.phoneno,
                email: truck_driver.email,
                rating: truck_driver.rating,
                auth: driver[0].authourization,
              });
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
