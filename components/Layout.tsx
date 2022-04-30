import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
