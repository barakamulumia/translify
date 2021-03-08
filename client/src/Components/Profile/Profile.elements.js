import styled from "styled-components";
import { Paper, Avatar } from "@material-ui/core";

export const GreetingLine = styled.h3`
  font-size: 42px;
  line-height: 48px;
  text-align: center;
  text-transform: capitalize;
  color: #810101;
  padding: 8px;
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProfileSectionHeader = styled.p`
  font-size: 1.7rem;
  color: #810101;
  text-align: center;
  line-height: 40px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const PersonalDetailsItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2em;
  border: 1px solid rgba(231, 218, 218, 0.87);
  background: rgba(231, 218, 218, 0.87);
  border-radius: 5px;
  padding: 8px 4px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Transaction = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(231, 218, 218, 0.87);
  background: rgba(231, 218, 218, 0.87);
  border-radius: 5px;
  padding: 8px 4px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const TransactionType = styled.p`
  font-size: 1.2em;
  font-weight: 600;
  text-transform: lowercase;
`;

export const TransactionAmount = styled.p`
  font-size: 0.9em;
  font-weight: 300;
  font-style: italic;
  color: blue;
`;

export const FormPaper = styled(Paper)`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
`;

export const FormAvatar = styled(Avatar)`
  background-color: #f48fb1;
  margin: 8px;
`;
