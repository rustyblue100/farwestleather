import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import styled from "styled-components";
import { urlFor } from "../lib/sanity";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Slogan2 = styled.div`
  text-align: center;
  align-items: center;
  margin: 100px auto;

  h3 {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.themeDark};
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
    color: ${({ theme }) => theme.media.themeDark};
  }

  .divider {
    padding-top: 20px;
    display: block;
    border-bottom: 2px solid #8cada7;
    width: 273px;
    margin: 20px auto;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobileL}) {
    margin: 80px auto 100px auto;
  }
`;

const SacsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  margin-bottom: 100px;
  gap: 5px;

  @media (max-width: ${({ theme }) => theme.media.mobileL}) {
    justify-content: flex-start;
  }
`;

const Sac = styled.div`
  position: relative;
  flex: 0 0 33%;
  cursor: pointer;
  height: auto;

  :before {
    :hover {
      content: "";
      display: block;
      opacity: 1;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.laptop}) {
    flex: 0 0 49%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobileL}) {
    flex: 0 0 100%;
  }
`;

const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.themeDark};
`;
const Title = styled.div<{ index: number }>`
  position: absolute;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.themeLight};
  z-index: 99;
  width: 100%;
  height: 100%;
  transition: 0.4s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  opacity: 0;
  :hover {
    opacity: 1;
    background-color: ${(props) => {
      return props.index % 2 == 0
        ? props.theme.colors.themePrimary
        : props.theme.colors.themeSecondary;
    }};
  }

  h2 {
    font-size: 20px;
    font-weight: 400;
  }
  transition: ${({ theme }) => theme.transitionDuration};
`;

const Plus = styled.div`
  font-size: 18px;
  margin-top: -70px;
  float: right;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.themeGray700};
  }
`;

interface IProps {
  sacs: {
    nom: string;
    images: [];
  }[];

  limit: number;
  titre: string;
  ramdom: boolean;
}
const Collection: NextPage<IProps> = ({ sacs, limit, titre, ramdom }) => {
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

  function renderSacs(): JSX.Element[] {
    const shuffeled = () => {
      if (ramdom) {
        return (
          sacs &&
          sacs
            .sort(() => {
              const randomTrueOrFalse = Math.random() > 0.5;
              return randomTrueOrFalse ? 1 : -1;
            })
            .slice(0, limit)
        );
      } else if (limit === 6 && titre !== "Vous pourriez aussi aimer") {
        return sacs && sacs.slice(0, limit);
      } else {
        return sacs;
      }
    };

    return shuffeled().map((sac: any, i: number) => {
      const imageData = urlFor(sac.images[0]).url();
      return (
        <Link key={sac._id} href={`/collection/${sac.slug?.current}`} passHref>
          <Sac>
            <Title index={i}>
              <h2>{sac?.nom}</h2>
            </Title>
            <ImageWrapper>
              <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
              >
                <Image
                  src={imageData}
                  width="400"
                  height="400"
                  objectFit="contain"
                  alt={sac?.nom}
                  className="image"
                />
              </motion.div>
            </ImageWrapper>
          </Sac>
        </Link>
      );
    });
  }

  return (
    <>
      <Slogan2>
        <h4> {titre ? titre : "Collection"}</h4>
        <div className="divider"></div>
      </Slogan2>
      <SacsWrapper>{renderSacs()}</SacsWrapper>
      <Plus>
        {limit > 0 && (
          <Link href={"/collection"}>
            <a style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              Voir toute la collection <FontAwesomeIcon icon={faAngleRight} />
            </a>
          </Link>
        )}
      </Plus>
    </>
  );
};

export default memo(Collection);
