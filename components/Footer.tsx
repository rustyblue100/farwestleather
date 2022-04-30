import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: var(--theme-black);
  color: var(--theme-white);
  display: flex;
`;

const FooterWrapper = styled.div`
  margin: 40px auto;
  width: 1140px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 14px;

  h3 {
    color: var(--theme-primary);
    text-transform: uppercase;
    font-weight: 500;
  }

  p {
    font-weigth: 400;
  }

  ul {
    li {
      margin-left: -25px;
      line-height: 2;
      color: var(--theme-gray-500);
    }
  }

  .copyright {
    padding-top: 20px;
  }
`;

const Profile = styled.div`
  flex: 0 0 33%;
  margin-right: 200px;
`;

const Liens = styled.div`
  flex: 0 0 33%;
`;

const Social = styled.div`
  flex: 0 0 33%;
`;

const Footer: React.FC = () => {
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
            Tous droits réservés 2017 © Farwestleather
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
          <h3>Sociale</h3>Twitter
        </Social>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
