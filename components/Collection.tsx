import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { NextPage } from "next";

const SacsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  margin-bottom: 100px;
  gap: 5px;
`;

const Sac = styled.div`
  flex: 0 0 33%;
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
        <Sac key={i}>
          <Image
            src={sac?.image}
            width="400px"
            height="400px"
            alt={sac?.name}
          />
        </Sac>
      );
    });
  }

  return <SacsWrapper>{renderSacs()}</SacsWrapper>;
};

export default Collection;
