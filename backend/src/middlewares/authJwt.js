const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models");

const User = db.user;
const Role = db.role;

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthourized" });
    }
    req.userId = decoded.id;
    next();
  });
};

const isClient = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).json({ message: err });
      return;
    }
    if (!user) {
      res.status(404).json({ message: "user not found" });
      return;
    }

    Role.findOne(
      {
        _id: user.role,
      },
      (err, role) => {
        if (err) {
          res.status(500).json({ message: err });
          return;
        }
        if (role.name === "client") {
          next();
          return;
        }

        res.status(403).json({ message: "Require Client role" });
        return;
      }
    );
  });
};

const isAdmin = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).json({ message: err });
      return;
    }
    if (!user) {
      res.status(404).json({ message: "user not found" });
      return;
    }
    Role.find(
      {
        _id: user.role,
      },
      (err, role) => {
        if (err) {
          res.status(500).json({ message: err });
          return;
        }
        if (role.name === "admin") {
          next();
          return;
        }
        res.status(403).json({ message: "Require Admin role" });
        return;
      }
    );
  });
};

const isDriver = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (!user) {
      res.status(404).json({ message: "user not found" });
      return;
    }

    if (err) {
      res.status(500).json({ message: err });
      return;
    }
    Role.findOne(
      {
        _id: user.role,
      },
      (err, role) => {
        if (err) {
          res.status(500).json({ message: err });
          return;
        }

        if (role.name === "driver") {
          next();
          return;
        }

        res.status(403).json({ message: "Require Driver Role!" });
        return;
      }
    );
  });
};

const authJwt = {
  verifyToken,
  isClient,
  isAdmin,
  isDriver,
};

module.exports = authJwt;
