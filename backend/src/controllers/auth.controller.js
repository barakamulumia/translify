const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.signup = (req, res) => {
  const {
    firstname,
    lastname,
    phoneno,
    email,
    password: userPassword,
    role,
  } = req.body;

  Role.findOne(
    {
      name: role,
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
        res.json({ message: "User was reqistered successfully" });
      });
    }
  );
};

exports.signin = (req, res) => {
  const { email, password, role } = req.body;

  Role.findOne(
    {
      name: role,
    },
    (err, role) => {
      if (err) {
        res.status(500).json({ message: err });
        return;
      }

      User.findOne(
        {
          email,
          role: role._id,
        },
        (err, user) => {
          if (err) {
            res.status(500).json({ message: err });
            return;
          }

          if (!user) {
            return res.status(404).json({
              message: "User Not Found",
            });
          }

          let valid = bcrypt.compareSync(password, user.password);

          if (!valid) {
            return res.status(401).json({
              accessToken: null,
              message: "Invalid Password",
            });
          }

          let token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400,
          });

          const { _id: id, firstname, lastname, phoneno, email } = user;

          res.status(200).json({
            id,
            firstname,
            lastname,
            email,
            phoneno,
            role: role.name,
            accessToken: token,
          });
        }
      );
    }
  );
};
