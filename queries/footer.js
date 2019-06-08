const footerQuery = `
  query {
    footer: getFooter {
      mainText
      copyright
      imageLinks {
        image {
          path
        }
        link
        wide
      }
      textColor {
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

export default footerQuery;
