import React, { Fragment } from "react";
import { Container } from "../../Resources/Styles/global";
import { DecisionDialog } from "../index";

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

const InfoSection = ({ topline, headline, description, btn, img }) => {
  return (
    <Fragment>
      <InfoSec>
        <Container>
          <InfoRow>
            <InfoColumn>
              <TextWrapper>
                <TopLine>{topline.content}</TopLine>
                <Heading>{headline.content}</Heading>
                <SubTitle>{description.content}</SubTitle>
                <DecisionDialog
                  big="true"
                  primary="true"
                  btnText={btn.label}
                  actionText="Sign up"
                />
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <Image src={img.src} start={img.start} alt={img.alt} />
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </Fragment>
  );
};

export default InfoSection;
