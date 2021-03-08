import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const CardContainer = styled(Paper)`
  margin-top: 64px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(3, 3, 3, 0.014) !important;
`;

export const Timeline = styled.p`
  color: #fff !important;
  font-size: 1.5em;
  font-weight: 800;
  margin: 5px;
`;
