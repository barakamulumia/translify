const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

const checkDuplicateEmail = (req, res, next) => {
  User.findOne(
    {
      email: req.body.email,
    },
    (err, user) => {
      if (err) {
        res.status(500).json({ message: err });
        return;
      }
      if (user) {
        res.status(400).json({ message: "failed! Email is already in use" });
        return;
      }
      next();
    }
  );
};

const checkRolesExisted = (req, res, next) => {
  const { role } = req.body;

  if (role) {
    if (!ROLES.includes(role)) {
      res.status(400).json({
        message: `Failed! Role ${role} does not exist`,
      });
      return;
    }
  }

  next();
};

const verifySignUp = {
  checkDuplicateEmail,
  checkRolesExisted,
};

module.exports = verifySignUp;
