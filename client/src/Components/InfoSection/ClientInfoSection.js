import React, { Fragment } from "react";
import { Container, LinkButton } from "../../Resources/Styles/global";

import {
  InfoSec,
  InfoColumn,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
} from "./InfoSection.elements";

import { Image } from "../index";

const InfoSection = ({ topline, headline, description, img, btn }) => {
  return (
    <Fragment>
      <InfoSec dark topMargin>
        <Container>
          <InfoRow>
            <InfoColumn>
              <Image src={img.src} start={img.start} alt={img.alt} />
            </InfoColumn>
            <InfoColumn>
              <TextWrapper>
                <TopLine>{topline.content}</TopLine>
                <Heading>{headline.content}</Heading>
                <SubTitle>{description.content}</SubTitle>
                <LinkButton primary="true" to="/client/order-truck">
                  {btn.label}
                </LinkButton>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </Fragment>
  );
};

export default InfoSection;
