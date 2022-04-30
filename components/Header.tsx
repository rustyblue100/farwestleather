import styled from "styled-components";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faFacebookF);

const Navbar = styled.div`
  background-color: var(--theme-black);
  font-size: 14px;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 28px 20px;
`;

const Social = styled.div`
  flex: 1;
  display: flex;
  gap: 30px;
  color: var(--theme-white);
`;

const LogoWrap = styled.div`
  flex: 1;
  max-width: 184px;
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
`;

const Menu = styled.div`
  flex:1;
  display:flex;
  justify-content:flex-end;
  gap:20px;

  a{
      color: var(--theme-white);
      text-transform: capitalize;
      text-decoration:none;
  `;

const Header: React.FC = () => {
  return (
    <Navbar>
      <Container>
        <Social>
          <div className="tems-social">
            <a
              target="_blank"
              href="https://www.facebook.com/cuirsfarwest/"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                style={{ fontSize: 15, color: "white" }}
              />
            </a>
          </div>
          <div className="tems-social">
            <a
              target="_blank"
              href="https://www.pinterest.ca/blanchard2603/pins/"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faPinterest}
                style={{ fontSize: 15, color: "white" }}
              />
            </a>
          </div>
          <div className="tems-social">
            <a
              target="_blank"
              href="https://www.instagram.com/blanchard.fabien/"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ fontSize: 15, color: "white" }}
              />
            </a>
          </div>
        </Social>

        <LogoWrap>
          <Logo />
        </LogoWrap>

        <Menu>
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
