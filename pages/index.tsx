import styled from "styled-components";
import { useEffect, useState } from "react";
import Caroussel from "../components/Caroussel";
import Image from "next/image";
import Collection from "../components/Collection";
import Head from "next/head";
import type { NextPage } from "next";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import { sanityClient, PortableText } from "../lib/sanity";

const Slogan = styled.div`
  text-align: center;
  align-items: center;
  margin: 80px auto;

  h3 {
    font-size: 15px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.themePrimary};

    @media (max-width: ${({ theme }) => theme.media.mobileL}) {
      margin-top: 10px;
    }
  }

  h4 {
    font-size: 30px;
    font-weight: 200;
    text-align: center;
    margin: 40px auto;
    color: #000;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.themeDark};
  }

  .divider {
    padding-top: 20px;
    display: block;
    border-bottom: 2px solid ${({ theme }) => theme.colors.themeSecondary};
    width: 273px;
    margin: 20px auto;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobileL}) {
    max-width: 384px;
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0 40px 0;

  @media (max-width: ${({ theme }) => theme.media.mobileL}) {
    flex-direction: column;
    margin: 80px 0 40px 0;
  }

  .desc-img {
    position: relative;
    width: 570px;
    height: 380px;

    @media (max-width: ${({ theme }) => theme.media.mobileL}) {
      display: none !important;
    }
  }

  .desc-wrapper {
    width: 570px;
    height: 380px;
    background-color: ${({ theme }) => theme.colors.themePrimary};

    @media (max-width: ${({ theme }) => theme.media.mobileL}) {
      width: 100%;
    }
  }

  .desc-text {
    padding: 70px;
    color: ${({ theme }) => theme.colors.themeLight};

    @media (max-width: ${({ theme }) => theme.media.laptop}) {
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
    nom: string;
    images: [];
  }[];

  aPropos: {
    titre: string;
    description: string;
  }[];
  carousselData: {
    nom: string;
    images: [];
  }[];
}

const Accueil: NextPage<IProps> = ({ sacs, aPropos, carousselData }) => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.5 });
  const [ref3, inView3] = useInView({ threshold: 0 });
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }

    if (inView2) {
      controls2.start("visible");
    }

    if (inView3) {
      controls3.start("visible");
    }
  }, [controls, inView, controls2, inView2, controls3, inView3]);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const variants2 = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };
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
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        >
          <Caroussel carousselData={carousselData} />
        </motion.div>

        <Slogan>
          <h3>FARWEST&#8226;LEATHER</h3>
          <motion.h4
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 2 }}
            ref={ref}
          >
            Inspiration, beauté, solidité...
          </motion.h4>
          <div className="divider"></div>
        </Slogan>

        <motion.div
          variants={variants}
          initial="hidden"
          animate={controls2}
          transition={{ duration: 1 }}
          ref={ref2}
        >
          <Description>
            <div className="desc-img">
              <Image
                src="/besace.jpeg"
                layout="fill"
                objectFit="cover"
                alt="sac"
              />
            </div>

            <div className="desc-wrapper">
              <div className="desc-text">
                <h2>Inspiration</h2>
                <PortableText value={aPropos[0]?.description} />
              </div>
            </div>
          </Description>
        </motion.div>

        <Nouveaute>
          <motion.div
            variants={variants}
            initial="hidden"
            animate={controls3}
            transition={{ duration: 1 }}
            ref={ref3}
          >
            <Collection
              sacs={sacs}
              limit={6}
              titre="Les nouveautés"
              ramdom={false}
            />
          </motion.div>
        </Nouveaute>
      </>
    </>
  );
};

export default Accueil;

export async function getStaticProps() {
  const sacsQuery = `*[_type =="sacs"] | order(order asc)`;
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
