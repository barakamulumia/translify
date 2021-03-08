const bcrypt = require("bcrypt");
const db = require("../../models");
const User = db.user;
const Role = db.role;

module.exports = {
  create: async (req, res) => {
    const {
      firstname,
      lastname,
      phoneno,
      email,
      password: userPassword,
    } = req.body;

    Role.findOne(
      {
        name: "client",
      },
      (err, role) => {
        if (err) {
          res.status(500).json({ message: err });
          return;
        }
        const user = new User({
          firstname,
          lastname,
          phoneno,
          email,
          password: bcrypt.hashSync(userPassword, 10),
          role: role._id,
        });

        user.save((err, user) => {
          if (err) {
            res.status(500).json({ message: err });
            return;
          }
          res.status(200).json(user);
        });
      }
    );
  },
  fetch: (req, res) => {
    Role.findOne(
      {
        name: "client",
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
          (err, clients) => {
            if (err) {
              res.status(500).json({
                message: err,
              });
              return;
            }
            if (!clients) {
              res.status(404).json({
                message: "Clients Not Found",
              });
              return;
            }
            res.set("content-range", clients.length);
            const response = clients.map((client) => {
              const {
                rating,
                _id: id,
                firstname,
                lastname,
                phoneno,
                email,
              } = client;
              return {
                id,
                firstname,
                lastname,
                phoneno,
                email,
                role: "client",
                rating,
              };
            });
            res.status(200).json(response);
          }
        );
      }
    );
  },

  get: async (req, res) => {
    const clientId = req.params.id;
    User.findOne(
      {
        _id: clientId,
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
            message: "Client Not Found",
          });
          return;
        }
        res.status(200).json(client);
      }
    );
  },
  update: async (req, res) => {
    const clientId = req.params.id;
    const updates = req.body;
    User.findByIdAndUpdate(clientId, updates, (err, response) => {
      if (err) {
        res.status(500).json({
          message: err,
        });
        return;
      }
      User.findById(clientId, (err, client) => {
        if (err) {
          res.status(500).json({
            message: err,
          });
          return;
        }
        res.status(200).json({
          data: { ...client, id: client._id },
        });
      });
    });
  },
  delete: async (req, res) => {
    const clientId = req.params.id;
    User.findById(clientId, (err, client) => {
      if (err) {
        if (err) {
          res.status(404).json({
            message: err,
          });
          return;
        }
        if (!client) {
          res.status(404).json({
            message: "Client Not Found",
          });
          return;
        }
        User.findByIdAndDelete(clientId);
        res.status(200).json({
          data: { ...client, id: client._id },
        });
      }
    });
  },
};
