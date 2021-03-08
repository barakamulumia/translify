import styled, { keyframes } from "styled-components";
import Typography from "@material-ui/core/Typography";

const anime = keyframes`
  0% {
      color: red;
  }

  50% {
      color: black;
      letter-spacing: 1px;
  }

  100% {
      color: red;
  }
`;
export const ErrorMessage = styled(Typography)`
  font-family: sans-serif;
  color: red;

  animation: ${anime} 3s ease infinite;
`;
