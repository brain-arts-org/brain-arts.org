import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import GlobalStyle from "../style/global";

const Layout = ({ children, navData, footerData }) => (
  <>
    <Head siteTitle="Brain Arts Org" />
    <GlobalStyle />
    <Nav data={navData} />
    <div>{children}</div>
    <Footer data={footerData} />
  </>
);

export default Layout;
