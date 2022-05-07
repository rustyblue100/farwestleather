import styled from "styled-components";
import { theme } from "../theme";
import Image from "next/image";

const Grid = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  gap: 100px;

  @media (max-width: ${theme.tablet}) {
    gap: 10px;
    flex-direction: column;
  }
`;

const Title = styled.div`
  text-align: center;
  align-items: center;
  margin: 100px auto;

  h3 {
    font-size: 12px;
    font-weight: 300;
    color: ${theme.themeDark};
  }

  h4 {
    font-size: 30px;
    font-weight: 200;
    text-align: center;
    margin: 40px auto;
    color: #000;
    width: 95%;
    line-height: 1.5;
    max-width: 700px;
    color: ${theme.themeDark};
  }

  .divider {
    padding-top: 20px;
    display: block;
    border-bottom: 2px solid #8cada7;
    width: 273px;
    margin: 20px auto;
    text-align: center;
  }

  @media (max-width: ${theme.mobileL}) {
    margin: 80px auto 100px auto;
  }
`;
const GridItem = styled.div`
  flex: 1;
`;

const Description = styled.div`
  white-space: pre-line;
`;

const contact = () => {
  return (
    <Grid>
      <GridItem>
        <Image
          src="https://i2.wp.com/farwestleather.com/wp-content/uploads/2017/03/IMG_2124.jpg?w=685&ssl=1"
          width="600"
          height="1000"
          alt="contact"
        ></Image>
      </GridItem>
      <GridItem>
        <Title>
          <h4> Contact</h4>
          <div className="divider"></div>
        </Title>
        <Description>
          Les prix sont à titre informatifs. Chaque création est faite sur
          mesure en fonction de votre besoin, choix de cuir, etc. Si vous avez
          un design ou une couleur particulière en tête, n’hésitez pas à vous
          faire plaisir et m’en faire part. Écrivez-moi et je prendrais soin de
          vous lire et de vous répondre. 2 à 3 semaines seront nécéssaires entre
          la commande et la réception du produit. Envois internationaux
          possibles.
        </Description>
      </GridItem>
    </Grid>
  );
};

export default contact;
