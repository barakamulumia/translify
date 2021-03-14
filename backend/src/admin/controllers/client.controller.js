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

    const client_role = await Role.findOne({
      name: "client",
    });

    if (!client_role) {
      res.status(404).json({
        message: "Role not found",
      });
      return;
    }

    const user = await User.create({
      firstname,
      lastname,
      phoneno,
      email,
      password: bcrypt.hashSync(userPassword, 10),
      role: role._id,
    });

    const is_saved = await user.save();
    if (!is_saved) {
      res.status(500).json({ message: is_saved.errors });
      return;
    }
    res.status(201).json(user);
  },
  fetch: async (req, res) => {
    const client_role = await Role.findOne({
      name: "client",
    });

    if (!client_role) {
      res.status(404).json({
        message: "Role Not Found",
      });
      return;
    }

    const users = await User.find({
      role: client_role.id,
    });

    if (!users) {
      res.status(404).json({
        message: "Drivers Not Found",
      });
      return;
    }

    const clients = users.map((client) => {
      const { rating, _id: id, firstname, lastname, phoneno, email } = client;
      return {
        id,
        firstname,
        lastname,
        phoneno,
        email,
        rating,
      };
    });

    res.set("content-range", clients.length);
    res.status(200).json(clients);
  },

  get: async (req, res) => {
    const id = req.params.id;
    const user = await User.findOne({
      _id: id,
    });

    if (!user) {
      res.status(404).json({
        message: "Client Not Found",
      });
      return;
    }
    res.status(200).json(user);
  },
  delete: async (req, res) => {
    const clientId = req.params.id;
    const user = await User.findById(clientId);
    if (!user) {
      res.status(404).json({
        message: "Client Not Found",
      });
      return;
    }
    const deleted_user = await User.findByIdAndDelete(clientId);

    res.status(204).json({
      data: { ...deleted_user, id: deleted_user._id },
    });
  },
};
