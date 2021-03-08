import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
import { Button } from "../../Resources/Styles/global";

import {
  FooterContainer,
  FooterSectionContainer,
  FooterSubHeading,
  FooterHeading,
  Form,
  FormInput,
  FooterLink,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksItem,
  FooterLinksWrapper,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  SocialIcons,
  SocialIconLink,
  WebRights,
} from "./Footer.elements";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log(email);
      setEmail("");
    }
  };
  return (
    <FooterContainer>
      <FooterSectionContainer>
        <FooterHeading>
          Join our exclusive membership to receive latest news, trends and
          amaizing offers
        </FooterHeading>
        <FooterSubHeading>You can opt out anytime</FooterSubHeading>
        <Form>
          <FormInput
            name="email"
            type="email"
            placeholder="Your Email"
            value={email}
          />
          <Button type="button" big onClick={handleSubscribe}>
            Subscribe
          </Button>
        </Form>
      </FooterSectionContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItem>
            <FooterLinkTitle>Discover</FooterLinkTitle>
            <FooterLink to="/about-us">Who are we</FooterLink>
            <FooterLink to="/how-it-works">How It Works</FooterLink>
            <FooterLink to="/terms-of-sevice">Terms of service</FooterLink>
            <FooterLink to="/contact-us">Contact Us</FooterLink>
          </FooterLinksItem>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItem>
            <FooterLinkTitle>Services</FooterLinkTitle>
            <FooterLink to="/driver/sign-in">Earn</FooterLink>
            <FooterLink to="/services">Freight</FooterLink>
            <FooterLink to="/services">House Moving</FooterLink>
            <FooterLink to="/services">Office Moving</FooterLink>
          </FooterLinksItem>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            translify
          </SocialLogo>
          <WebRights>&copy;&nbsp;transilify&nbsp;2020</WebRights>
          <SocialIcons>
            <SocialIconLink
              href="https://www.linkedin.com/"
              target="_blank"
              aria-label="linkedin"
            >
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink
              href="https://web.facebook.com/"
              target="_blank"
              aria-label="facebook"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.instagram.com/"
              target="_blank"
              aria-label="instagaram"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.twitch.tv/"
              target="_blank"
              aria-label="twitch"
            >
              <FaTwitch />
            </SocialIconLink>
            <SocialIconLink
              href="https://twitter.com/"
              target="_blank"
              aria-label="twitter"
            >
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
