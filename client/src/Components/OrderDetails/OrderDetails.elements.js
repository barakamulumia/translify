import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const OrderDetailsContainer = styled(Paper)`
  background-color: rgba(0, 0, 0, 0.8) !important;
  margin-top: 64px;
  padding: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const OrderDetailsHeader = styled.p`
  font-size: 2.5em;
  font-weight: 500;
  color: #ffffff;
  padding: 8px;
  width: 100%;
  text-align: center;
`;

export const OrderColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

export const OrderItem = styled.p`
  font-weight: 500;
  width: 50%;
  font-size: 1.3rem;
  text-transform: capitalize;
  color: #ffffff;
  padding: 4px;
  margin: 4px;
`;

export const OrderValue = styled.p`
  font-size: 1.3rem;
  width: 50%;
  color: #f1f1f1;
  padding: 4px;
  margin: 4px;
  border-bottom: 2px solid #fff;
  font-weight: 300;
`;

export const OrderStatus = styled(OrderValue)`
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 500;
`;
