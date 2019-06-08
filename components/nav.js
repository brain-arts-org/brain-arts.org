import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { getImageUrl } from "takeshape-routing";
import { H2, Container, MediaQueries, Img } from "../style";

const NavWrapper = styled.nav`
  background: ${props =>
    props.useImage ? `url('${props.background}')` : props.background};
  text-align: center;
  padding-top: 60px;
  padding-bottom: 20px;
`;

const Subheader = styled(H2)`
  margin-top: 30px;
  margin-bottom: 50px;

  ${MediaQueries.small} {
    margin-top: 15px;
    margin-bottom: 40px;
    font-size: 22px;
    text-align: center;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0;
`;

const NavListItem = styled.li`
  padding: 0 50px;

  ${MediaQueries.small} {
    padding: 0 10px;
  }
`;

const ExternalNavLink = styled.a`
  font-family: DinAlternate;
  font-weight: 400;
  font-size: 24px;
  color: ${props => props.color};
  text-transform: uppercase;
  text-decoration: none;

  &:visited {
    color ${props => props.color};
  }

  ${MediaQueries.small} {
    font-size: 16px;
  }
`;

const InternalNavLink = styled(Link)`
  font-family: DinAlternate;
  font-weight: 400;
  font-size: 24px;
  color: ${props => props.color};
  text-transform: uppercase;
  text-decoration: none;

  &:visited {
    color ${props => props.color};
  }

  ${MediaQueries.small} {
    font-size: 16px;
  }
`;

const Nav = ({ data }) => (
  <NavWrapper
    background={
      data.background.useImage
        ? getImageUrl(data.background.image.path)
        : data.background.color.hex
    }
    useImage={data.background.useImage}
  >
    <Container>
      <a href="/">
        <Img src="/static/images/bao_logo.png" />
      </a>
      <Subheader color={data.subheader.color.hex}>
        {data.subheader.text}
      </Subheader>
      <NavList>
        {data.links.map((link, index) => {
          const LinkTag = link.externalLink ? ExternalNavLink : InternalNavLink;
          if (link.externalLink) {
            return (
              <NavListItem key={index}>
                <ExternalNavLink href={link.url} color={data.linkColor.hex}>
                  {link.text}
                </ExternalNavLink>
              </NavListItem>
            );
          }
          return (
            <NavListItem key={index}>
              <InternalLinkTag href={link.url} color={data.linkColor.hex}>
                <a>{link.text}</a>
              </InternalLinkTag>
            </NavListItem>
          );
        })}
      </NavList>
    </Container>
  </NavWrapper>
);

export default Nav;
