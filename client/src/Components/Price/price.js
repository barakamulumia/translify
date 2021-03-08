import React from "react";
import { useSelector } from "react-redux";
import calcPriceFromLatLng, {
  currencyToString,
} from "../../Resources/Utils/price";

import {
  selectDestination,
  selectPickUp,
  selectLoad,
} from "../../State/maps.slice";

import {
  PriceContainer,
  PriceSymbol,
  PriceAmount,
  PriceWrapper,
} from "./price.elements";

const Price = () => {
  const pickup = useSelector(selectPickUp);
  const destination = useSelector(selectDestination);
  const load = useSelector(selectLoad);

  let content;

  if (pickup && destination) {
    content = (
      <PriceWrapper>
        <PriceContainer>
          <PriceSymbol>Ksh:</PriceSymbol>
          <PriceAmount>
            {currencyToString(calcPriceFromLatLng(pickup, destination, load))}
          </PriceAmount>
        </PriceContainer>
      </PriceWrapper>
    );
  } else {
    content = null;
  }

  return <div>{content}</div>;
};

export default Price;
