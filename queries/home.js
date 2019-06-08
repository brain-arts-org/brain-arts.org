const homeQuery = `
  query {
    homePage: getHomePage {
      aboutBlurb {
        text
        textColor {
          hex
        }
        backgroundColor {
          hex
        }
        instagramUrl
        facebookUrl
      }
      ourProjectsHeader
      projects {
        name
        url
        image {
          path
        }
        detail
      }
      mainTextColor {
        hex
      }
      background {
        color {
          hex
        }
        image {
          path
        }
        useImage
      }
    }
  }
`;

export default homeQuery;
