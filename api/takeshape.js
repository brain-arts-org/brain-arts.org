import fetch from "isomorphic-unfetch";

const ENDPOINT = `https://api.takeshape.io/project/${
  process.env.TAKESHAPE_PROJECT
}/graphql`;

const TakeShape = {
  async getContent(query) {
    const response = await fetch(ENDPOINT, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TAKESHAPE_TOKEN}`
      },
      body: JSON.stringify({ query })
    });
    const json = await response.json();
    return json.data;
  }
};

export default TakeShape;
