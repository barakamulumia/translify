import { Paper, Avatar, Grid } from "@material-ui/core";
import styled from "styled-components";
import { Button } from "../../Resources/Styles/global";

export const FormContainer = styled(Grid)`
  background-image: url("https://i.postimg.cc/qq4HKc3t/production-center.jpg");
  background-repeat: no-repeat;
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const FormPaper = styled(Paper)`
  margin-top: 64px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 24px;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-family: sans-serif;
  letter-spacing: 4px;
  font-weight: 300;
`;

export const FormAvatar = styled(Avatar)`
  background-color: #f48fb1;
  margin: 8px;
`;
