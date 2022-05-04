import styled from "styled-components";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { theme } from "../theme";
import Burger from "./Burger";
import MobileMenu from "./MobileMenu";

library.add(faFacebookF);

const Navbar = styled.div<{ scrollMenu: boolean }>`
  background-color: ${(props) =>
    props.scrollMenu ? theme.themeLight : theme.themeDark};
  font-size: 14px;
  position: sticky;
  top: 0;
  z-index: 999;
  transition: all ${theme.transitionDuration};
  height: 70px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 2000px;
  height: 100%;
  padding: 0 20px;
`;

const Social = styled.div<{ scrollMenu: boolean }>`
  flex: 1;
  display: flex;
  position: relative;
  align-items: center;

  a {
    padding: 25px 20px;

    :hover {
      background-color: ${theme.themePrimary};
      display: inline-block;
    }
  }

  div:nth-child(2) {
    a:hover {
      background-color: ${theme.themeSecondary};
    }
  }

  svg {
    font-size: 15px;
    color: ${(props) =>
      props.scrollMenu ? theme.themeDark : theme.themeLight};
    transition: all ${theme.transitionDuration};
  }
`;

const LogoWrap = styled.div<{ scrollMenu: boolean }>`
  width: ${(props) => (props.scrollMenu ? "84px" : "184px")};
  fill: #010101;
  background-color: ${theme.themeLight};
  height: auto;
  display: flex;
  position: relative;

  svg {
    position: absolute;
    top: -32px;
    z-index: 999;
    background: ${theme.themeLight};
  }

  @media (max-width: ${theme.tablet}) {
    max-width: 84px;
  }

  transition: all ${theme.transitionDuration};
`;

const Menu = styled.div<{ scrollMenu: boolean }>`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  height: 100%;
  align-items: center;

  a {
    color: ${(props) =>
      props.scrollMenu ? theme.themeDark : theme.themeLight};
    text-transform: capitalize;
    text-decoration: none;

    width: 100%;
    height: auto;
    padding: 25px;

    :hover {
      background-color: ${theme.themePrimary};
      display: inline-block;
    }
  }

  div:nth-child(2) {
    a:hover {
      background-color: ${theme.themeSecondary};
      display: inline-block;
    }
  }

  @media (max-width: ${theme.tablet}) {
    display: none;
  }
`;

const MobileMenuWrapper = styled.div`
  flex: 1;

  @media (min-width: ${theme.tablet}) {
    display: none;
  }
`;

const Header: React.FC = () => {
  const [colorchange, setColorchange] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <Navbar scrollMenu={colorchange}>
      <Container>
        <MobileMenu open={open} />
        <Social scrollMenu={colorchange}>
          <div className="items-social">
            <a
              target="_blank"
              href="https://www.facebook.com/cuirsfarwest/"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
          <div className="items-social">
            <a
              target="_blank"
              href="https://www.pinterest.ca/blanchard2603/pins/"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faPinterest} />
            </a>
          </div>
          <div className="items-social">
            <a
              target="_blank"
              href="https://www.instagram.com/blanchard.fabien/"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </Social>

        <LogoWrap scrollMenu={colorchange}>
          <Logo />
        </LogoWrap>

        <Menu scrollMenu={colorchange}>
          <div>
            <a href="#inspiration">inspiration</a>
          </div>
          <div>
            <a href="#collection">collection</a>
          </div>
          <div>
            <a href="#contact">contact</a>
          </div>
        </Menu>

        <MobileMenuWrapper>
          <Burger open={open} setOpen={setOpen} colorchange={colorchange} />
        </MobileMenuWrapper>
      </Container>
    </Navbar>
  );
};

export default Header;
