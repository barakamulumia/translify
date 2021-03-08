import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const CardContainer = styled(Paper)`
  text-align: center;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 30px;
  margin: 20px auto;
  width: 300px;
  height: 280px;
  border-top: 5px solid #f77f00;
`;

export const CardHeader = styled.h3`
  color: #333;
  line-height: 1.7;
  display: block;
  font-size: 1.25em;
  font-weight: bold;
`;

export const CardContent = styled.p`
  display: block;
  margin: 5px 10px 5px;
  padding: 4px;
  color: #88898b;
  font-size: 14px;
  text-align: center;
`;

export const CardFooter = styled(CardContent)`
  font-weight: 700;
`;
