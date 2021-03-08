import styled from "styled-components";

export const DialogContainer = styled.section`
  display: flex;
  z-index: 102;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: transparent;

  @media screen and (max-width: 636px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const DialogCard = styled.div`
  position: relative;
  width: 270px;
  height: 300px;
  background: rgba(2, 49, 167, 0.623);
  margin: 10px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border-radius: 15px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const DialogContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
`;

export const DialogMediaWrapper = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  border: 5px solid #021a69;
  border-radius: 50%;
  overflow: hidden;

  @media screen and (max-width: 636px) {
    width: 100px;
    height: 100px;
  }
`;

export const DialogMedia = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DialogTextContent = styled.div`
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 500;
  text-align: center;
  margin: 20px 0 10px;
  line-height: 1.1em;
`;
