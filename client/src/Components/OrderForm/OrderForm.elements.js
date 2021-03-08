import { Paper, Avatar, FormControl, MenuItem } from "@material-ui/core";
import styled from "styled-components";
import { Button } from "../../Resources/Styles/global";

export const FormPaper = styled(Paper)`
  background: rgba(250, 248, 248, 0.945) !important;
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

export const FormControlWrapper = styled(FormControl)`
  width: 100%;
`;

export const FormContainer = styled.div`
  width: 100%;
`;

export const Label = styled.p`
  color: #01114d;
`;

export const Option = styled(MenuItem)`
  padding: 16px !important;
  background-color: #ddd;
`;
