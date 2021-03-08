import React, { useEffect, Fragment } from "react";
import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  selectOrders,
  fetchOrders,
  ordersFilterChanged,
  selectFilter,
} from "../../State/orders.slice";

import { LinkButton } from "../../Resources/Styles/global";
import OrderCard from "../OrderCard/OrderCard";

import {
  MdAccessAlarm,
  MdWarning,
  MdImportExport,
  MdCheck,
} from "react-icons/md";
import { IconContext } from "react-icons/lib";

import {
  OrderCardContainer,
  OrderCardHeader,
  OrdersNav,
  FilterButton,
  Icon,
  FilterText,
  Notification,
  Message,
} from "./Orders.elements";

const Orders = ({ setActiveIndex, user }) => {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const order_status = useSelector((state) => state.orders.status);
  const error = useSelector((state) => state.orders.error);
  const filter = useSelector(selectFilter);

  const handleFilterChange = (filter) => dispatch(ordersFilterChanged(filter));

  const active_filter = (current_filter) => current_filter === filter;

  useEffect(() => {
    if (order_status === "idle") {
      dispatch(fetchOrders());
    }
  }, [dispatch, order_status]);

  let content;

  if (order_status === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (order_status === "succeeded") {
    content = (
      <Fragment>
        {orders.length ? (
          orders.map((order) => (
            <OrderCard
              order={order}
              key={order._id}
              SET_ACTIVE_INDEX={setActiveIndex}
            />
          ))
        ) : (
          <Notification>
            <Message>No orders in this category</Message>
            <br />
            {user.role === "client" && (
              <LinkButton primary="true" to="/client/order-truck">
                Place Your Order
              </LinkButton>
            )}
          </Notification>
        )}
      </Fragment>
    );
  } else if (order_status === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <IconContext.Provider
      value={{
        color: "#00f",
        width: "100%",
        height: "100%",
      }}
    >
      <Grid item>
        <OrderCardContainer>
          <OrderCardHeader>My Transits</OrderCardHeader>
          <OrdersNav>
            <FilterButton
              warning={active_filter("pending")}
              onClick={() => handleFilterChange("pending")}
            >
              <Icon>
                <MdAccessAlarm />
              </Icon>
              <FilterText>Pending</FilterText>
            </FilterButton>
            <FilterButton
              warning={active_filter("cancelled")}
              onClick={() => handleFilterChange("cancelled")}
            >
              <Icon>
                <MdWarning />
              </Icon>
              <FilterText>Cancelled</FilterText>
            </FilterButton>
            <FilterButton
              warning={active_filter("in-progress")}
              onClick={() => handleFilterChange("in-progress")}
            >
              <Icon>
                <MdImportExport />
              </Icon>
              <FilterText>InProgress</FilterText>
            </FilterButton>
            <FilterButton
              warning={active_filter("successfull")}
              onClick={() => handleFilterChange("successfull")}
            >
              <Icon>
                <MdCheck />
              </Icon>
              <FilterText>Successfull</FilterText>
            </FilterButton>
          </OrdersNav>
          {content}
        </OrderCardContainer>
      </Grid>
    </IconContext.Provider>
  );
};

export default Orders;
