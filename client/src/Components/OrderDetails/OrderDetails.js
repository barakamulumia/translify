import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currencyToString } from "../../Resources/Utils/price";

import {
  updateOrder,
  ordersFilterChanged,
  selectActiveOrder,
} from "../../State/orders.slice";

import { DriverAPI, ClientAPI } from "../../Api";
import { Button } from "../../Resources/Styles/global";

import {
  OrderDetailsContainer,
  OrderDetailsHeader,
  OrderColumn,
  OrderItem,
  OrderValue,
  OrderStatus,
} from "./OrderDetails.elements";

const OrderDetails = ({ user }) => {
  const order = useSelector(selectActiveOrder);

  const { _id: orderId } = order;
  const [driver, setDriver] = useState(null);
  const [client, setClient] = useState(null);
  const dispatch = useDispatch();

  const OrderUpdate = (status) => {
    dispatch(updateOrder({ orderId, status }));
  };

  const handleOrderCancel = () => {
    OrderUpdate("cancelled");
    dispatch(ordersFilterChanged("cancelled"));
  };

  const handleOrderAccept = () => {
    OrderUpdate("in-progress");
    dispatch(ordersFilterChanged("in-progress"));
  };

  const handleOrderComplete = () => {
    OrderUpdate("successfull");
    dispatch(ordersFilterChanged("successfull"));
  };

  useEffect(() => {
    DriverAPI.getDriverById(order.driverId)
      .then((res) => {
        setDriver(res.data);
      })
      .catch((_err) => {
        setDriver(null);
      });

    ClientAPI.getClientById(order.clientId)
      .then((res) => {
        setClient(res.data);
      })
      .catch((_err) => {
        setClient(null);
      });
  }, [order.driverId, order.clientId]);

  if (!order) {
    return null;
  }
  return (
    <OrderDetailsContainer>
      <OrderDetailsHeader>translify</OrderDetailsHeader>
      <OrderColumn>
        <OrderItem>Order No:</OrderItem>
        <OrderValue>{orderId.slice(0, 8)}</OrderValue>
      </OrderColumn>
      <OrderColumn>
        <OrderItem>Pick Up: </OrderItem>
        <OrderValue>{order.pickup.address}</OrderValue>
      </OrderColumn>
      <OrderColumn>
        <OrderItem> Destination: </OrderItem>
        <OrderValue>{order.destination.address}</OrderValue>
      </OrderColumn>
      <OrderColumn>
        <OrderItem>Charges: </OrderItem>
        <OrderValue
          style={{
            letterSpacing: "3px",
          }}
        >
          Ksh:&nbsp;{currencyToString(order.charges)}
        </OrderValue>
      </OrderColumn>
      {user.role === "client"
        ? driver && (
            <OrderColumn>
              <OrderItem>Driver</OrderItem>
              <OrderValue>
                {driver.firstname} - {driver.truckno}
              </OrderValue>
            </OrderColumn>
          )
        : user.role === "driver"
        ? client && (
            <OrderColumn>
              <OrderItem>Client</OrderItem>
              <OrderValue>
                {client.firstname}&nbsp;{client.lastname}
              </OrderValue>
            </OrderColumn>
          )
        : null}
      <OrderColumn>
        <OrderItem>Date: </OrderItem>
        <OrderValue>{new Date(order.dateTime).toLocaleString()}</OrderValue>
      </OrderColumn>
      <OrderColumn>
        <OrderItem>Status: </OrderItem>
        <OrderStatus>{order.status}</OrderStatus>
      </OrderColumn>
      {order.status === "pending" &&
        (user.role === "driver" ? (
          <OrderColumn>
            <Button primary onClick={handleOrderAccept}>
              Accept
            </Button>
            <Button primary>Decline</Button>
          </OrderColumn>
        ) : (
          user.role === "client" && (
            <OrderColumn>
              <Button onClick={handleOrderCancel}>Cancel</Button>
            </OrderColumn>
          )
        ))}
      {order.status === "in-progress" && (
        <OrderColumn>
          <Button onClick={handleOrderComplete}>Complete Trip</Button>
        </OrderColumn>
      )}
    </OrderDetailsContainer>
  );
};

export default OrderDetails;
