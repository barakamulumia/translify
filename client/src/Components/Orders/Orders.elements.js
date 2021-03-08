import styled from "styled-components";
import { Paper } from "@material-ui/core";
import { Button } from "../../Resources/Styles/global";

export const OrderCardContainer = styled.div`
  width: 100%;
  margin-top: 64px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const OrderCardHeader = styled.p`
  font-size: 2.5em;
  font-weight: 500;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 8px;
  width: 100%;
  text-align: center;
`;

export const OrdersNav = styled(Paper)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.7) !important;
`;

export const FilterButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
`;

export const FilterText = styled.p`
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const Icon = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    flex-grow: 1;
  }
`;

export const Notification = styled(Paper)`
  background-color: rgba(0, 0, 0, 0.7) !important;
  width: 100%;
  height: 300px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.p`
  font-size: 2.5em;
  font-weight: 500;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 8px;
  width: 100%;
  text-align: center;
`;
