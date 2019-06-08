const navQuery = `
  query {
    nav: getNav {
      subheader {
        text
        color {
          hex
        }
      }
      linkColor {
        hex
      }
      links {
        externalLink
        url
        text
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

export default navQuery;
