import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faFacebookF);

const FooterContainer = styled.div`
  padding: 20px 0;
  background-color: var(--theme-black);
  color: var(--theme-white);
`;

const FooterWrapper = styled.div`
  margin: 40px auto;
  width: 1140px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 14px;

  h3 {
    color: var(--theme-primary);
    text-transform: uppercase;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 40px;
  }

  p {
    font-weight: 400;
  }

  ul {
    margin-left: -28px;
    li {
      line-height: 2;
      color: var(--theme-white);
    }
  }

  .copyright {
    padding-top: 40px;
    font-size: 12px;
  }
`;

const Profile = styled.div`
  flex: 1;
`;

const Liens = styled.div`
  flex: 1;
  margin-left: 100px;
`;

const Social = styled.div``;

const SocialLink = styled.div`
  max-width: 100px;
  display: flex;
  justify-content: space-between;

  .items-social {
    background-color: var(--theme-gray-700);
    padding: 5px 10px;
    margin-right: 2px;
    color: var(--theme-white);
  }
`;

const today = new Date();
const yyyy = today.getFullYear();

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Profile>
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
        </Profile>
        <Liens>
          <h3>Liens</h3>
          <ul>
            <li>Inspiration</li>
            <li>Collection</li>
            <li>Contact</li>
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
        </Social>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
