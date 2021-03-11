import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import bgImage from "../Images/background-lg.svg";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  font-family: 'Nunito Sans', sans-serif;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 40px;
  padding-left: 40px;

  @media screen and (max-width: 991px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;

export const Button = styled.button`
  box-sizing: border-box;
  min-width: ${({ fullWidth }) => (fullWidth ? "100%" : "64px")};
  margin: 5px;
  padding: ${({ big, small }) =>
    small ? "4px 16px" : big ? "12px 64px" : "8px 32px"};

  font-size: ${({ big, small }) =>
    small ? "0.95em" : big ? "1.2em" : "1.1em"};

  line-height: 1.75;
  border-radius: 4px;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ primary, secondary, warning }) =>
    primary || secondary ? "#fff" : warning ? "#000015" : "#061119"};
  background-color: ${({ primary, secondary, warning }) =>
    primary ? "#014da3" : warning ? "#F0E20E" : secondary ? "#454D4A" : "#fff"};

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  cursor: pointer;
  text-transform: capitalize;
  outline: none;
  border: none;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.4;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const LinkButton = styled(Link)`
  min-width: 64px;
  box-sizing: border-box;
  min-width: 64px;
  margin: 5px;
  padding: ${({ big }) => (big ? "12px 64px" : "8px 32px")};

  font-size: 1.2em;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ primary, secondary, warning }) =>
    primary || secondary ? "#fff" : warning ? "#000015" : "#061119"};
  background-color: ${({ primary, secondary, warning }) =>
    primary ? "#014da3" : warning ? "#F0E20E" : secondary ? "#454D4A" : "#fff"};

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  cursor: pointer;
  text-transform: capitalize;
  outline: none;
  border: none;

  &:hover {
    opacity: 0.9;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const ImageBgContainer = styled.div`
  background-image: url(${bgImage});
  min-height: 100vh;
  padding: 40px 30px;
  background-attachment: fixed;
  background-size: cover;
`;
export default GlobalStyle;
