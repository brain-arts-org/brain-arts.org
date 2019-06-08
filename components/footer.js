import React from "react";
import styled from "styled-components";
import { getImageUrl } from "takeshape-routing";
import { P, Colors, Container, MediaQueries, Img } from "../style";

const FooterWrapper = styled.footer`
  background: ${props =>
    props.useImage
      ? `url('${props.background}') no-repeat center center`
      : props.background};
  background-size: cover;
  padding-top: 15px;
  padding-bottom: 60px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 5fr 7fr;
  padding-top: 30px;
`;

const LinkSection = styled.div`
  padding: 0 30px;
  grid-column: span 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  ${MediaQueries.small} {
    grid-column: span 12;
    margin-bottom: 40px;
  }
`;

const ImageLink = styled.a`
  grid-column: ${({ wide }) => (wide ? "span 2" : "span 1")};
`;

const TextSection = styled.div`
  padding-left: 20px;
  grid-column: span 1;

  ${MediaQueries.small} {
    grid-column: span 2;
  }
`;

const Copyright = styled(P)`
  font-size: 12px;
  margin-top: 40px;

  ${MediaQueries.small} {
    font-size: 12px;
  }
`;

const Footer = ({ data }) => (
  <FooterWrapper
    background={
      data.background.useImage
        ? getImageUrl(data.background.image.path)
        : data.background.color.hex
    }
    useImage={data.background.useImage}
  >
    <Container>
      <Img src="/static/images/footer_border.png" />
      <FooterGrid>
        <LinkSection>
          {data.imageLinks.map((imageLink, index) => (
            <ImageLink href={imageLink.link} wide={imageLink.wide} key={index}>
              <Img src={getImageUrl(imageLink.image.path)} />
            </ImageLink>
          ))}
        </LinkSection>
        <TextSection>
          <P size="small" color={data.textColor.hex} dark>
            {data.mainText}
          </P>
          <Copyright color={data.textColor.hex} dark>
            {data.copyright}
          </Copyright>
        </TextSection>
      </FooterGrid>
    </Container>
  </FooterWrapper>
);

export default Footer;
