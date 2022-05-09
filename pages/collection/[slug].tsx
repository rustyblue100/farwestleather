import { faAngleLeft, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetStaticPaths, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import Collection from "../../components/Collection";
import { PortableText, sanityClient, urlFor } from "../../lib/sanity";
import { theme } from "../../theme";

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
  margin-bottom: 20px;
  cursor: zoom-in;
  background-color: ${theme.themeDark};
`;

const Thumbnails = styled.div`
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  width: 68%;

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
  font-weight: 400;
  line-height: 1.2;
  display: inline-block;
`;

const Divider = styled.div`
  border-bottom: 2px solid ${theme.themeSecondary};
`;

const Credit = styled.div`
  font-size: 11px;
  position: absolute;
  bottom: 162px;
  right: -28px;
  transform: rotate(-90deg);
  color: ${theme.themeGray100};
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
    background-color: ${theme.themeGray100};
  }

  transition: ${theme.transitionDuration};
`;

interface IProps {
  sacs: {
    nom: string;
    images: [];
    description: [];
    prix: number;
    credit: string;
  };

  data: {
    nom: string;
    images: [];
    description: [];
    prix: number;
    credit: string;
  }[];
}

const CollectionPage: NextPage<IProps> = ({ sacs, data }) => {
  const { nom, images, description, prix, credit }: any = sacs;

  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [endNav, setEndNav] = useState(false);
  const [imageToShow, setImageToShow] = useState("");
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
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = (e: any): void => {
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
        width="800"
        height="700"
        objectFit="contain"
        onClick={() => showImage(imageToShow)}
        src={!imageToShow ? urlFor(images[0]).url() : urlFor(imageToShow).url()}
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
        src={urlFor(image).url()}
        width="96"
        height="96"
        objectFit="cover"
        alt="image"
      />
    );
  });

  return (
    <>
      <Head>
        <title>{nom} - Farwestleather</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
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
                      src={urlFor(imageToShow).url()}
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
              <Credit>@{credit}</Credit>
              <Thumbnails>{imageCards}</Thumbnails>
            </Caroussel>
          </GridItem>
          <GridItem>
            <PageTitle>{nom}</PageTitle>
            <Divider />
            <Description>
              <PortableText value={description} />
            </Description>
            Prix à partir de : {prix}$
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

const sacsQuery = `*[_type =="sacs" && slug.current == $slug][0]{
  _id,
  nom,
  slug,
  images,
  description,
  prix,
  credit
}`;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths =
    await sanityClient.fetch(`*[_type =="sacs" && defined(slug.current)]{
      "params": {
        "slug": slug.current
  }}`);

  return {
    paths,
    fallback: false,
  };
};

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const { slug } = params;

  const sacs = await sanityClient.fetch(sacsQuery, { slug });

  const data = await sanityClient.fetch(`*[_type =="sacs"]`);

  return {
    props: {
      data,
      sacs,
    },
  };
};
