const db = require("../models");
const User = db.user;
const Role = db.role;

exports.getClientById = (req, res) => {
  User.findOne(
    {
      _id: req.headers.clientid,
    },
    (err, client) => {
      if (err) {
        res.status(200).json({
          message: err,
        });
        return;
      }
      if (!client) {
        res.status(404).json({
          message: "Clinet not found",
        });
        return;
      }

      Role.findOne(
        {
          _id: client.role,
        },
        (err, role) => {
          if (err) {
            res.status(200).json({
              message: err,
            });
            return;
          }
          if (!role) {
            res.status(404).json({
              message: "Role does not exist",
            });
            return;
          }
          const { firstname, lastname } = client;

          res.status(200).json({
            firstname,
            lastname,
          });
        }
      );
    }
  );
};
