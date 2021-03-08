import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const OrderContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.7) !important;
  margin: 3px 5px;
  cursor: pointer;
  padding: 4px 16px;
  width: 100%;

  &:hover {
    background-color: #d6d6d6;
  }
`;

export const OrderCardHeader = styled.p`
  font-weight: 500;
  color: #fff;
  font-size: 1.3rem;
`;

export const OrderDestination = styled.p`
  font-style: italic;
  font-weight: 300;
  color: #fff;
`;
