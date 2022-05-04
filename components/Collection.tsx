import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { NextPage } from "next";
import { theme } from "../theme";
import Link from "next/link";

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
      console.log(props);
      return props.index % 2 == 0 ? theme.themePrimary : theme.themeSecondary;
    }};
  }
  transition: ${theme.transitionDuration};
`;

interface IProps {
  sacs: {
    results: {
      name: "string";
      image: "string";
    }[];
  };
}
const Collection: NextPage<IProps> = ({ sacs }) => {
  function renderSacs(): JSX.Element[] {
    return sacs.results.map((sac, i) => {
      return (
        <Link key={i} href="/" passHref>
          <Sac>
            <Title index={i}>{sac?.name}</Title>
            <Image src={sac?.image} width="400" height="400" alt={sac?.name} />
          </Sac>
        </Link>
      );
    });
  }

  return <SacsWrapper>{renderSacs()}</SacsWrapper>;
};

export default Collection;
