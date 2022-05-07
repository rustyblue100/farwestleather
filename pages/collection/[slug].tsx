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
  margin: 80px 20px;
  max-width: 1140px;

  @media (max-width: ${theme.tablet}) {
    margin: 20px 20px;
    flex-direction: column;
  }
`;

const Grid = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  gap: 100px;

  @media (max-width: ${theme.tablet}) {
    gap: 10px;
    flex-direction: column;
  }
`;

const GridItem = styled.div``;

const Caroussel = styled.div`
  position: relative;
  #lightbox {
    z-index: 999;
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

const ImageWrapper = styled.div`
  width: 80%;
  max-height: 80vh;

  > span {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
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

  :hover {
    background-color: ${theme.themePrimary};
  }

  transition: ${theme.transitionDuration};
`;

const CloseButton = styled.button`
  border: 0;
  background: none;
  position: absolute;
  top: 10px;
  right: 30px;
  font-size: 32px;
  z-index: 999;
  cursor: pointer;
  padding: 14px;
  color: ${theme.themeLight};
  :hover {
    background-color: ${theme.themePrimary};
  }

  transition: ${theme.transitionDuration};
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0 4px;
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
  const { name, image }: { name: string; image: string } = sacs;

  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [endNav, setEndNav] = useState(false);
  const [imageToShow, setImageToShow] = useState(images[0]);
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  const showImage = (image: string) => {
    //set imageToShow to be the one that's been clicked on

    setImageToShow(image);
    //set lightbox visibility to true
    setLightBoxDisplay(true);
  };

  const showNext = (e: any): void => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(true);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = (e: any): void => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(true);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  const featuredImage = () => {
    return (
      <Image
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

                  <ImageWrapper>
                    <Image
                      id="lightbox-img"
                      src={imageToShow}
                      layout="fill"
                      objectFit="contain"
                      alt="img"
                      className="image"
                    />
                  </ImageWrapper>

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

export const getStaticProps = async (context: any) => {
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
