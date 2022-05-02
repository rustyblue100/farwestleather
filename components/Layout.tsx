import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { NextPage } from "next";

const Layout: NextPage<any> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
