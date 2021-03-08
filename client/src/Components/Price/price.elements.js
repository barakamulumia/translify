import styled from "styled-components";
import Paper from "@material-ui/core/paper";

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 510px;
  margin-top: 20px;
`;

export const PriceContainer = styled(Paper)`
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const PriceSymbol = styled.p`
  font-weight: 500;
  font-size: 2rem;
  line-height: 50px;
  margin: 0 5px;
`;

export const PriceAmount = styled.p`
  line-height: 50px;
  color: #101522;
  font-size: 2.5rem;
  margin: 0 5px;
  letter-spacing: 2px;
`;
