import styled from "styled-components";
import type { NextPage } from "next";
import { theme } from "../theme";
import Image from "next/image";
import { bool } from "prop-types";
import MenuLinks from "../utils/menuLinks.json";
import Link from "next/link";

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
  border-bottom: 1px solid ${theme.themeLight};
  display: inline-block;
  text-align: center;
  margin-bottom: 20px;
  img {
  }
`;

const Menu: NextPage<any> = ({ open, setOpen }) => {
  return (
    <>
      <StyledMenu open={open}>
        <ImageLogo>
          <Image src={"/favicon.ico"} width="18" height="18" alt="logo" />
        </ImageLogo>
        {MenuLinks.map((lien, i) => {
          return (
            <div key={i} onClick={() => setOpen(!open)}>
              <Link href={lien.slug}>{lien.titre}</Link>
            </div>
          );
        })}
      </StyledMenu>
    </>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
