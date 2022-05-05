import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { NextPage } from "next";

const Layout: NextPage<any> = ({ children }) => {
  const Container = styled.div`
    margin: 20px auto;
    max-width: 1140px;
  `;

  return (
    <>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
