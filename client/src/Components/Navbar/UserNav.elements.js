import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

export const UserLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
export const DashBoardIcon = styled(MdDashboard)`
  margin-right: 0.5rem;
`;

export const AppTitle = styled.p`
  color: #ff0;
  font-weight: 400;
  letter-spacing: 2px;
  border: 1px solid #ff0;
  outline: none;
  border-radius: 5px;
  padding: 4px 8px;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  font-size: 1.3rem;
  display: flex;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: ${({ primary }) => (primary ? "#00f" : "#fff")};
`;

export const AccountDropDown = styled.p`
  cursor: pointer;
  text-decoration: none;
  font-size: 1.3rem;
  display: flex;
  font-weight: 500;
  color: #00f;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
