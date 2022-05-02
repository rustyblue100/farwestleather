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

library.add(faFacebookF);

const Navbar = styled.div<{ scrollMenu: boolean }>`
  background-color: ${(props) =>
    props.scrollMenu ? "var(--theme-white)" : "var(--theme-black)"};
  font-size: 14px;
  position: sticky;
  top: 0;
  z-index: 999;
  transition: all 0.4s;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 28px 20px;
  max-width: 2000px;
`;

const Social = styled.div<{ scrollMenu: boolean }>`
  flex: 1;
  display: flex;
  gap: 30px;

  svg {
    font-size: 15px;
    color: ${(props) =>
      props.scrollMenu ? "var(--theme-black)" : "var(--theme-white)"};
    transition: all 0.4s;
  }
`;

const LogoWrap = styled.div<{ scrollMenu: boolean }>`
  flex: 1;
  max-width: ${(props) => (props.scrollMenu ? "84px" : "184px")};

  fill: #010101;
  background-color: var(--theme-white);
  height: auto;
  display: flex;
  position: relative;

  svg {
    position: absolute;
    top: -32px;
    z-index: 999;
    background: var(--theme-white);
  }

  transition: all 0.4s;
`;

const Menu = styled.div<{ scrollMenu: boolean }>`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 20px;

  a {
    color: ${(props) =>
      props.scrollMenu ? "var(--theme-black)" : "var(--theme-white)"};
    text-transform: capitalize;
    text-decoration: none;
    transition: all 0.4s;
  }
`;

const Header: React.FC = () => {
  const [colorchange, setColorchange] = useState(false);

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
      </Container>
    </Navbar>
  );
};

export default Header;
