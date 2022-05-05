import Image from "next/image";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { NextPage } from "next";
import Collection from "../../components/Collection";
import Link from "next/link";
import { theme } from "../../theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faClose } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  margin: 100px auto;
  max-width: 1140px;
`;

const Grid = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  gap: 100px;
`;

const GridItem = styled.div``;

const Caroussel = styled.div`
  position: relative;
  #lightbox {
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: ${theme.themeDark};

    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

const Featured = styled.div`
  margin: 0;
  padding: 0;
  cursor: zoom-in;
`;

const Thumbnails = styled.div`
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  cursor: pointer;
`;

const Description = styled.div`
  white-space: pre-line;
`;

const PageTitle = styled.h1`
  line-height: 2;
  display: inline-block;
  border-bottom: 2px solid ${theme.themeSecondary};
`;

const ButtonNav = styled.button`
  cursor: pointer;
  border: 0;
  background: none;
  color: ${theme.themeLight};
  font-size: 20px;
  flex: 1;
  :hover {
    background-color: ${theme.themePrimary};
  }

  transition: ${theme.transitionDuration};
`;

const CloseButton = styled.button`
  border: 0;
  background: none;
  position: absolute;
  top: 100px;
  right: 40px;
  font-size: 32px;
  z-index: 999;
  cursor: pointer;
  padding: 20px;
  color: ${theme.themeLight};
  :hover {
    background-color: ${theme.themePrimary};
  }

  transition: ${theme.transitionDuration};
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: -10px;
  cursor: pointer;
  border: 0;
  background: none;
  padding: 10px;
  color: ${theme.themePrimary};
  :hover {
    color: ${theme.themeDark};
  }

  transition: ${theme.transitionDuration};
`;

interface IProps {
  sacs: {
    name: string;
    image: string;
  }[];

  data: {}[];
}

const image1 =
  "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80";
const image2 =
  "https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80";
const image3 =
  "https://images.unsplash.com/photo-1447684808650-354ae64db5b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80";
const image4 =
  "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2110&q=80";
const image5 =
  "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2301&q=80";
const image6 =
  "https://images.unsplash.com/photo-1500694216671-a4e54fc4b513?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2092&q=80";

//IMAGE ARRAY
const images = [image1, image2, image3, image4, image5, image6];

const CollectionPage: NextPage<IProps> = ({ sacs, data }) => {
  const { name, image } = sacs;

  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState(images[0]);
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  const showImage = (image) => {
    //set imageToShow to be the one that's been clicked on

    setImageToShow(image);
    //set lightbox visibility to true
    setLightBoxDisplay(true);
  };

  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  const featuredImage = () => {
    return (
      <Image
        id="lightbox-img"
        width="1800"
        height="1400"
        objectFit="cover"
        onClick={() => showImage(imageToShow)}
        src={imageToShow}
        alt="img"
      />
    );
  };

  const imageCards = images.map((image: any, i: number) => {
    return (
      <Image
        key={i}
        className="image-card"
        onClick={() => setImageToShow(image)}
        src={image}
        width="96"
        height="96"
        objectFit="cover"
        alt="image"
      />
    );
  });

  return (
    <>
      <Container>
        <Link href={"/collection"} passHref>
          <BackButton>
            <FontAwesomeIcon icon={faAngleLeft} /> retour
          </BackButton>
        </Link>
        <Grid>
          <GridItem style={{ flex: "0 0 58%" }}>
            <Caroussel>
              {lightboxDisplay ? (
                <div onClick={hideLightBox} id="lightbox">
                  <CloseButton onClick={hideLightBox}>
                    <FontAwesomeIcon icon={faClose} />{" "}
                  </CloseButton>
                  <ButtonNav onClick={showPrev}>⭠</ButtonNav>
                  <Image
                    id="lightbox-img"
                    src={imageToShow}
                    width="1200"
                    height="1200"
                    objectFit="contain"
                    alt="img"
                  />

                  <ButtonNav onClick={showNext}>⭢</ButtonNav>
                </div>
              ) : (
                ""
              )}
              <Featured>{featuredImage()}</Featured>
              <Thumbnails>{imageCards}</Thumbnails>
            </Caroussel>
          </GridItem>
          <GridItem>
            <PageTitle>{name}</PageTitle>
            <Description>
              Cuir de type végétal teint à la main. Intérieur brut teint.
              Sacoche mode homme idéal pour sorties de ville. Poche intérieure à
              fermeture éclair. Dimension de 6.5x8x5 pouces. Prix à partir de
              250$ Sur Commande Seulement. Crédit Photo Patrick Trahan
            </Description>
          </GridItem>
        </Grid>
        <Collection
          sacs={data}
          limit={3}
          titre="Vous pourriez aussi aimer"
          ramdom
        />
      </Container>
    </>
  );
};

export default CollectionPage;

export const getStaticPaths = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();

  const paths = data.results.map((sac: any) => {
    return {
      params: {
        slug: sac.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: object) => {
  const slug = context.params.slug;
  const res = await fetch("https://rickandmortyapi.com/api/character/" + slug);
  const resAll = await fetch("https://rickandmortyapi.com/api/character/");
  const data = await res.json();
  const dataAll = await resAll.json();

  return {
    props: {
      data: dataAll,
      sacs: data,
    },
  };
};
