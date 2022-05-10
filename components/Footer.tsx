import styled from "styled-components";
import CookieConsent from "react-cookie-consent";
import { useState } from "react";
import MenuLinks from "../utils/menuLinks.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Logo from "./Logo";
import {
  faFacebookF,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

library.add(faFacebookF);

const FooterContainer = styled.div`
  margin-top: 200px;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.colors.themeDark};
  color: ${({ theme }) => theme.colors.themeLight}; ;
`;

const FooterWrapper = styled.div`
  margin: 40px auto;
  max-width: 1140px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 14px;

  h3 {
    color: ${({ theme }) => theme.colors.themePrimary};
    text-transform: uppercase;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 20px;

    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      margin-top: 40px;
      margin-bottom: 20px;
    }
  }

  p {
    font-weight: 400;
  }

  ul {
    margin-left: -28px;
    li {
      line-height: 2;
      color: ${({ theme }) => theme.colors.themeLight};
    }
  }

  .copyright {
    padding-top: 40px;
    font-size: 12px;

    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      display: none;
    }
  }

  .copyright-mobile {
    padding-top: 40px;
    font-size: 12px;
    display: none;
    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      display: block;
    }
  }
  padding: 0 20px;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.media.mobileL}) {
    display: block;
  }
`;

const Profile = styled.div`
  margin-right: 100px;
`;

const Liens = styled.div`
  flex: 1;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    margin-left: unset;
  }

  a {
    color: ${({ theme }) => theme.colors.themeLight};
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

const Social = styled.div``;

const SocialLink = styled.div`
  max-width: 100px;
  display: flex;
  justify-content: space-between;

  .items-social {
    background-color: ${({ theme }) => theme.colors.themeGray700};
    padding: 5px 10px;
    margin-right: 2px;
    color: ${({ theme }) => theme.colors.themeLight};
  }
`;

const LogoWrap = styled.div`
  margin-left: -17px;
  width: 144px;
  fill: ${({ theme }) => theme.colors.themeLight};
  background-color: ${({ theme }) => theme.colors.themeDark};
  height: auto;

  position: relative;
  cursor: pointer;

  svg {
    z-index: 999;
    background: ${({ theme }) => theme.colors.themeDark};
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    max-width: 84px;
    margin-left: -10px;
  }

  transition: all ${({ theme }) => theme.transitionDuration};
`;

const today = new Date();
const yyyy = today.getFullYear();

const Footer = () => {
  return (
    <>
      <CookieConsent
        style={{
          backgroundColor: "#8cada7de",
          width: "400px",
          justifyContent: "flex-end",
          left: "unset",
          right: 0,
          padding: 20,
        }}
        acceptOnScroll={true}
        acceptOnScrollPercentage={80}
        buttonText="Je comprends"
        buttonStyle={{
          backgroundColor: "#010101",
          color: "white",
        }}
      >
        <p style={{ color: "#ffffff" }}>
          Nous utilisons des cookies pour nous permettre de mieux comprendre
          comment le site est utilisé. En continuant à utiliser ce site, vous
          acceptez notre
        </p>
        <Link href={"/confidentialite"} passHref>
          <a style={{ color: "#ffffff" }}>politique de confidentialité</a>
        </Link>
        .
      </CookieConsent>
      <FooterContainer>
        <FooterWrapper>
          <Profile>
            <Link href="/" passHref>
              <LogoWrap>
                <Logo />
              </LogoWrap>
            </Link>
            <p className="copyright">
              Tous droits réservés {yyyy} © Farwestleather
            </p>
          </Profile>

          {/*         <Profile>
          <h3>Profile</h3>
          <p>
            Farwestleather c’est l’utilisation d’un cuir brut qui sera
            l’aboutissement d’un long travail marqué par le souci du détail.
            Teint, assemblé et cousu à la main. Entièrment fait à Montréal,
            L’entreprise se veut de durabilité, de beauté et à l’écoute de son
            futur possesseur. Chaque pièce se veut unique et signée.
          </p>

          <p className="copyright">
            Tous droits réservés {yyyy} © Farwestleather
          </p>
        </Profile> */}
          <Liens>
            <h3>Liens</h3>
            <ul>
              {MenuLinks.map((lien, i) => {
                return (
                  <>
                    <li key={i}>
                      <Link href={lien.slug}>{lien.titre}</Link>
                    </li>
                  </>
                );
              })}
              <li>
                <Link href={"/confidentialite"} passHref>
                  <a>Politique de confidentialité</a>
                </Link>
              </li>
            </ul>
          </Liens>

          <Social>
            <h3>SOCIALE</h3>
            <SocialLink>
              <div className="items-social">
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
              <div className="items-social">
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
              <div className="items-social">
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
            </SocialLink>

            <p className="copyright-mobile">
              Tous droits réservés {yyyy} © Farwestleather
            </p>
          </Social>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
