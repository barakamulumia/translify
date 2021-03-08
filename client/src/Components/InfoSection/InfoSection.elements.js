import styled from "styled-components";

export const InfoSec = styled.div`
  color: #101522;
  padding: 160px 0;
  background-color: ${({ dark }) =>
    dark ? "rgba(235, 235, 235, 0.7)" : "#fff"};
  margin-top: ${({ topMargin }) => (topMargin ? "30px" : "none")};
  /* background-image: url("https://i.postimg.cc/nhkFjLrr/kepple-port.jpg");
  background-repeat: no-repeat;
  background-size: cover; */
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px --15px;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.div`
  color: #4b59f7;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  color: #1c2237;
`;

export const SubTitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #1c2237;
`;
