import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectPickUp, selectDestination } from "../../State/maps.slice";
import { Image } from "../index";
import { CardContainer, Timeline } from "./TruckCard.elements";

const TruckCard = () => {
  const pickup = useSelector(selectPickUp);
  const destination = useSelector(selectDestination);

  let content;

  if (pickup && destination) {
    content = (
      <CardContainer>
        <Image
          src="https://i.postimg.cc/vHRBfYDN/car-driver.jpg"
          alt="truck driver image"
        />
        <Timeline>7 mins away</Timeline>
      </CardContainer>
    );
  } else {
    content = null;
  }

  return <Fragment>{content}</Fragment>;
};

export default TruckCard;
