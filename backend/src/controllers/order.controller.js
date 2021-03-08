const db = require("../models");
const Order = db.order;
const Driver = db.driver;

exports.creteOrder = (req, res) => {
  const {
    moveType,
    clientId,
    driverId,
    pickup,
    destination,
    load,
    charges,
  } = req.body;

  const newOrder = new Order({
    moveType,
    clientId,
    driverId,
    pickup,
    destination,
    load,
    charges,
    date: new Date(),
  });

  newOrder.save((err, order) => {
    if (err) {
      res.status(500).json({
        message: err,
      });
      return;
    }

    res.status(200).json({
      order,
    });
  });
};

exports.getAllOrdersByUserId = (req, res) => {
  const { userid, role } = req.headers;

  if (role === "client") {
    Order.find(
      {
        clientId: userid,
      },
      (err, orders) => {
        if (err) {
          res.status(500).json({
            message: err,
          });
          return;
        }

        if (!orders) {
          res.status(404).json({
            message: "orders not found",
          });
          return;
        }
        res.status(200).json({
          orders,
        });
      }
    );
  } else if (role === "driver") {
    Driver.findOne(
      {
        userId: userid,
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
            message: "orders not found",
          });
          return;
        }

        Order.find(
          {
            driverId: driver._id,
          },
          (err, orders) => {
            if (err) {
              res.status(500).json({
                message: err,
              });
              return;
            }

            if (!orders) {
              res.status(404).json({
                message: "orders not found",
              });
              return;
            }
            res.status(200).json({
              orders,
            });
          }
        );
      }
    );
  } else {
    res.status(401).json({
      message: "Invalid request headers",
    });
    return;
  }
};

exports.updateOrder = (req, res) => {
  const { orderId: _id, status } = req.body;

  Order.findOne(
    {
      _id,
    },
    (err, order) => {
      if (err) {
        res.status(500).json({
          message: err,
        });
        return;
      }

      if (!order) {
        res.status(404).json({
          message: "order not found",
        });
        return;
      }

      order.status = status;

      order.save((err, order) => {
        if (err) {
          res.status(500).json({
            message: err,
          });
          return;
        }
        res.status(200).json({
          message: "Order Updated Successfully",
        });
      });
    }
  );
};
