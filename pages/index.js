import React, { Component } from "react";
import styled from "styled-components";
import TakeShape from "../api/takeshape";
import { homeQuery, navQuery, footerQuery } from "../queries";
import { getImageUrl } from "takeshape-routing";
import { P, H2, Colors, Container, MediaQueries, Img } from "../style";
import Layout from "../layouts/default";

const Main = styled.main`
  width: 100%;
  background: ${props =>
    props.useImage
      ? `url('${props.background}') no-repeat center center`
      : props.background};
  background-size: cover;
  padding-top: 50px;
  padding-bottom: 150px;
`;

const Intro = styled.div`
  text-align: center;
  background-color: ${props => props.background};
  border-radius: 15px;
  padding: 40px;
  margin: 0 20px 60px;

  p {
    margin: 0;
  }

  ${MediaQueries.small} {
    padding: 20px;
    margin: 0 0 60px;
    text-align: left;

    p {
      font-size: 16px;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const SocialLink = styled.a`
  width: 40px;
  padding: 0 10px;
`;

const ProjectSelectionSection = styled.div`
  padding-bottom: 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 60px;
  grid-row-gap: 30px;

  ${MediaQueries.small} {
    grid-column-gap: 15px;
    grid-row-gap: 15px;
  }
`;

const ProjectSelectionWrapper = styled.div`
  grid-column: span 1;
`;

const ProjectSelection = styled.div`
  width: 100%;
  height: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 20px;
  box-sizing: border-box;
  border: 2px solid ${({ mainColor }) => mainColor};
  border-radius: 15px;
  text-align: center;
  background-color: ${({ active, mainColor, secondaryColor, imageBg }) =>
    active ? mainColor : imageBg ? "transparent" : secondaryColor};
  color: ${({ active, mainColor, secondaryColor }) =>
    active ? secondaryColor : mainColor};
  cursor: pointer;

  p {
    margin: 0;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
`;

const ImageSection = styled.div`
  grid-column: span 1;
  position: relative;

  ${MediaQueries.small} {
    grid-column: span 2;
  }
`;

const ProjectImage = styled(Img)`
  color: ${({ accentColor }) => accentColor};
  box-shadow: 5px 5px;
`;

const TextSection = styled.div`
  grid-column: span 1;

  ${MediaQueries.small} {
    margin-top: 30px;
    grid-column: span 2;
  }
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProjectIndex: 0
    };
  }

  static async getInitialProps() {
    const navData = await TakeShape.getContent(navQuery);
    const footerData = await TakeShape.getContent(footerQuery);
    const pageData = await TakeShape.getContent(homeQuery);
    return {
      navData: navData.nav,
      footerData: footerData.footer,
      pageData: pageData.homePage
    };
  }

  changeProject(index) {
    this.setState({ currentProjectIndex: index });
  }

  render() {
    const { navData, footerData, pageData } = this.props;
    const { currentProjectIndex } = this.state;
    const currentProject = pageData.projects[currentProjectIndex];
    console.log(pageData);
    return (
      <Layout navData={navData} footerData={footerData}>
        <Main
          background={
            pageData.background.useImage
              ? getImageUrl(pageData.background.image.path)
              : pageData.background.color.hex
          }
          useImage={pageData.background.useImage}
        >
          <Container>
            <Intro
              background={
                pageData.aboutBlurb.backgroundColor
                  ? pageData.aboutBlurb.backgroundColor.hex
                  : "transparent"
              }
            >
              <P size="large" color={pageData.aboutBlurb.textColor.hex} dark>
                {pageData.aboutBlurb.text}
              </P>
              <SocialLinks>
                <SocialLink href={pageData.aboutBlurb.instagramUrl}>
                  <Img src="/static/images/instagram.png" />
                </SocialLink>
                <SocialLink href={pageData.aboutBlurb.facebookUrl}>
                  <Img src="/static/images/facebook.png" />
                </SocialLink>
              </SocialLinks>
            </Intro>
            <H2 color={pageData.mainTextColor.hex}>
              {pageData.ourProjectsHeader}
            </H2>
            <ProjectSelectionSection>
              {pageData.projects.map((project, index) => (
                <ProjectSelectionWrapper key={index}>
                  <ProjectSelection
                    onClick={() => this.changeProject(index)}
                    active={index === currentProjectIndex}
                    mainColor={pageData.mainTextColor.hex}
                    secondaryColor={pageData.background.color.hex}
                    imageBg={pageData.background.useImage}
                  >
                    <P dark>{project.name}</P>
                  </ProjectSelection>
                </ProjectSelectionWrapper>
              ))}
            </ProjectSelectionSection>
            <ProjectGrid>
              <ImageSection>
                <ProjectImage
                  src={getImageUrl(currentProject.image.path)}
                  accentColor={pageData.mainTextColor.hex}
                />
              </ImageSection>
              <TextSection>
                <P color={pageData.mainTextColor.hex} dark>
                  {currentProject.detail}
                </P>
              </TextSection>
            </ProjectGrid>
          </Container>
        </Main>
      </Layout>
    );
  }
}

export default Home;
