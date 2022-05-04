import styled from "styled-components";
import type { NextPage } from "next";
import { theme } from "../theme";
import Image from "next/image";
import { bool } from "prop-types";

const StyledMenu = styled.div<{ open: boolean }>`
  background-color: ${theme.themeDark};
  height: 100vh;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100vw)")};
  width: 70%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  color: white;
  padding: 20px;
  a {
    font-size: 16px;
    line-height: 2;
    text-decoration: none;
    text-transform: capitalize;
    color: ${theme.themeLight};
  }
  transition: all 0.6s;
`;

const ImageLogo = styled.div`
  float: right;
  border-bottom: 1px solid ${theme.themeLight};

  img {
  }
`;

const Menu: NextPage<any> = ({ open }) => {
  return (
    <>
      {" "}
      <StyledMenu open={open}>
        <div>
          <a href="#inspiration">inspiration</a>
        </div>
        <div>
          <a href="#collection">collection</a>
        </div>
        <div>
          <a href="#contact">contact</a>
        </div>
        <ImageLogo>
          <Image src={"/favicon.ico"} width="18" height="18" alt="logo" />
        </ImageLogo>
      </StyledMenu>
    </>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
