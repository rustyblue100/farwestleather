import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { NextPage } from "next";
import { theme } from "../theme";
import Link from "next/link";
import { faBreadSlice } from "@fortawesome/free-solid-svg-icons";

const Slogan2 = styled.div`
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

const SacsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  margin-bottom: 100px;
  gap: 5px;

  @media (max-width: ${theme.mobileL}) {
    display: block;
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
`;
const Title = styled.div<{ index: number }>`
  position: absolute;
  font-size: 18px;
  color: ${theme.themeLight};
  z-index: 99;
  width: 100%;
  height: 100%;
  transition: 0.4s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  :hover {
    opacity: 1;
    background-color: ${(props) => {
      return props.index % 2 == 0 ? theme.themePrimary : theme.themeSecondary;
    }};
  }

  h2 {
    font-size: 20px;
  }
  transition: ${theme.transitionDuration};
`;

const Plus = styled.div`
  font-size: 18px;
  margin-top: -70px;
  float: right;

  a {
    text-decoration: none;
    color: ${theme.themeGray700};
  }
`;

interface IProps {
  sacs: {
    results: {
      id: number;
      name: "string";
      image: "string";
    }[];

    limit: number;
    titre: string;
    ramdom: boolean;
  };
}
const Collection: NextPage<IProps> = ({ sacs, limit, titre, ramdom }) => {
  function renderSacs(): JSX.Element[] {
    const shuffeled = () => {
      if (ramdom) {
        return (
          sacs &&
          sacs.results
            .sort(() => {
              const randomTrueOrFalse = Math.random() > 0.5;
              return randomTrueOrFalse ? 1 : -1;
            })
            .slice(0, limit)
        );
      } else if (limit === 6 && titre !== "Vous pourriez aussi aimer") {
        return sacs && sacs.results.slice(0, limit);
      } else {
        return sacs.results;
      }
    };

    return shuffeled().map((sac, i) => {
      return (
        <Link key={sac.id} href={`/collection/${sac.id}`} passHref>
          <Sac>
            <Title index={i}>
              <h2>{sac?.name}</h2>
            </Title>
            <Image src={sac?.image} width="400" height="400" alt={sac?.name} />
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
        {limit && <Link href={"/collection"}>Voir toute la collection..</Link>}
      </Plus>
    </>
  );
};

export default Collection;
