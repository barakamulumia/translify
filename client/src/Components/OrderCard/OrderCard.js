import React from "react";
import {
  OrderContainer,
  OrderCardHeader,
  OrderDestination,
} from "./OrderCard.elements";

const OrderCard = ({ order, SET_ACTIVE_INDEX }) => {
  const formatMoveType = (moveType) =>
    moveType === "hm"
      ? "House Moving"
      : moveType === "om"
      ? "Office Moving"
      : "Freight";

  return (
    <OrderContainer elevation={6} onClick={() => SET_ACTIVE_INDEX(order._id)}>
      <OrderCardHeader>{formatMoveType(order.moveType)}</OrderCardHeader>
      <OrderDestination>{order.destination.address}</OrderDestination>
    </OrderContainer>
  );
};

export default OrderCard;
