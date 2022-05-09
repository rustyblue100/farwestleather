import styled from "styled-components";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import Burger from "./Burger";
import MobileMenu from "./MobileMenu";
import MenuLinks from "../utils/menuLinks.json";
import { NextPage } from "next";

library.add(faFacebookF);

const Navbar = styled.div<{ scrollMenu: boolean }>`
  background-color: ${(props) =>
    props.scrollMenu
      ? props.theme.colors.themeLight
      : props.theme.colors.themeDark};
  font-size: 14px;
  position: sticky;
  top: 0;
  z-index: 999;
  transition: all ${({ theme }) => theme.transitionDuration};
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

  @media (max-width: ${({ theme }) => theme.colors.mobile}) {
  }
`;

const Social = styled.div<{ scrollMenu: boolean }>`
  flex: 1;
  display: flex;
  position: relative;
  align-items: center;

  a {
    padding: 25px 20px;

    :hover {
      background-color: ${({ theme }) => theme.colors.themePrimary};
      display: inline-block;

      @media (max-width: ${({ theme }) => theme.media.tablet}) {
        background-color: unset;
      }
    }

    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      padding: 25px 20px 25px 0;
    }
  }

  div:nth-child(2) {
    a:hover {
      background-color: ${({ theme }) => theme.colors.themeSecondary};

      @media (max-width: ${({ theme }) => theme.media.tablet}) {
        background-color: unset;
      }
    }
  }

  svg {
    font-size: 15px;
    color: ${(props) =>
      props.scrollMenu
        ? props.theme.colors.themeDark
        : props.theme.colors.themeLight};
    transition: all ${({ theme }) => theme.transitionDuration};
  }
`;

const LogoWrap = styled.div<{ scrollMenu: boolean }>`
  width: ${(props) => (props.scrollMenu ? "84px" : "184px")};
  fill: #010101;
  background-color: ${({ theme }) => theme.colors.themeLight};
  height: auto;
  display: flex;
  position: relative;
  cursor: pointer;

  svg {
    position: absolute;
    top: -32px;
    z-index: 999;
    background: ${({ theme }) => theme.colors.themeLight};
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    max-width: 84px;
  }

  transition: all ${({ theme }) => theme.transitionDuration};
`;

const Menu = styled.div<{ scrollMenu: boolean }>`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  height: 100%;
  align-items: center;

  a {
    color: ${(props) =>
      props.scrollMenu
        ? props.theme.colors.themeDark
        : props.theme.colors.themeLight};
    text-transform: capitalize;
    text-decoration: none;

    width: 100%;
    height: auto;
    padding: 27px;

    :hover {
      background-color: ${({ theme }) => theme.colors.themePrimary};

      text-decoration: none;
    }
  }

  div:nth-child(2) {
    a:hover {
      background-color: ${({ theme }) => theme.colors.themeSecondary};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    display: none;
  }
`;

const MobileMenuWrapper = styled.div`
  flex: 1;

  @media (min-width: ${({ theme }) => theme.media.tablet}) {
    display: none;
  }
`;

const Header: NextPage = () => {
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

        <Link href="/" passHref>
          <LogoWrap scrollMenu={colorchange}>
            <Logo />
          </LogoWrap>
        </Link>

        <Menu scrollMenu={colorchange}>
          {MenuLinks.map((lien, i) => {
            return (
              <div key={i}>
                <Link href={lien.slug}>{lien.titre}</Link>
              </div>
            );
          })}
        </Menu>

        <MobileMenuWrapper>
          <Burger open={open} setOpen={setOpen} colorchange={colorchange} />
          <MobileMenu open={open} setOpen={setOpen} />
        </MobileMenuWrapper>
      </Container>
    </Navbar>
  );
};

export default Header;
