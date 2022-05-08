import React from "react";
import styled from "styled-components";
import Caroussel from "../components/Caroussel";
import Image from "next/image";
import Collection from "../components/Collection";
import Head from "next/head";
import type { NextPage } from "next";
import { theme } from "../theme";
import { sanityClient, PortableText } from "../lib/sanity";

const Slogan = styled.div`
  text-align: center;
  align-items: center;
  margin: 60px auto;

  h3 {
    font-size: 15px;
    font-weight: 300;
    color: ${theme.themePrimary};
  }

  h4 {
    font-size: 30px;
    font-weight: 200;
    text-align: center;
    margin: 40px auto;
    color: #000;
    line-height: 1.5;
    color: ${theme.themeDark};
  }

  .divider {
    padding-top: 20px;
    display: block;
    border-bottom: 2px solid ${theme.themeSecondary};
    width: 273px;
    margin: 20px auto;
    text-align: center;
  }

  @media (max-width: ${theme.mobileL}) {
    max-width: 384px;
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0 40px 0;

  @media (max-width: ${theme.mobileL}) {
    flex-direction: column;
    margin: 80px 0 40px 0;
  }

  .desc-img {
    position: relative;
    width: 570px;
    height: 380px;

    @media (max-width: ${theme.mobileL}) {
      display: none !important;
    }
  }

  .desc-wrapper {
    width: 570px;
    height: 380px;
    background-color: ${theme.themePrimary};

    @media (max-width: ${theme.mobileL}) {
      width: 100%;
    }
  }

  .desc-text {
    padding: 70px;
    color: ${theme.themeLight};

    @media (max-width: ${theme.laptop}) {
      padding: 40px;
    }
  }
`;

const Nouveaute = styled.div`
  padding: 0 20px;
`;

interface IProps {
  sacs: {
    id: number;
    name: string;
    image: string;
  }[];

  aPropos: {
    titre: string;
    description: string;
  }[];
  carousselData: string;
}

const Accueil: NextPage<IProps> = ({ sacs, aPropos, carousselData }) => {
  return (
    <>
      <Head>
        <title>Farwestleather – Cuir teint, assemblé et cousu à la main.</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <>
        <Caroussel carousselData={carousselData} />
        <Slogan>
          <h3>FARWEST&#8226;LEATHER</h3>
          <h4>Inspiration, beauté, solidité...</h4>
          <div className="divider"></div>
        </Slogan>

        <Description>
          <div className="desc-img">
            <Image
              src="https://i1.wp.com/farwestleather.com/wp-content/uploads/2017/10/sac-3-1-e1507753936255.jpg?fit=600%2C401&ssl=1"
              layout="fill"
              objectFit="cover"
              alt="sac"
            />
          </div>

          <div className="desc-wrapper">
            <div className="desc-text">
              <h2>Inspiration</h2>
              <p>
                <PortableText value={aPropos[1]?.description} />
              </p>
            </div>
          </div>
        </Description>
        <Nouveaute>
          <Collection
            sacs={sacs}
            limit={6}
            titre="Les nouvautés"
            ramdom={false}
          />
        </Nouveaute>
      </>
    </>
  );
};

export default Accueil;

export async function getStaticProps() {
  const sacsQuery = `*[_type =="sacs"] | order(_createdAt desc)`;
  const aProposQuery = `*[_type =="a-propos"]`;
  const carousselQuery = `*[_type =="caroussel"]`;

  const sacs = await sanityClient.fetch(sacsQuery);
  const aPropos = await sanityClient.fetch(aProposQuery);
  const carousselData = await sanityClient.fetch(carousselQuery);

  return {
    props: {
      sacs,
      aPropos,
      carousselData,
    },
  };
}
