import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const SacsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
`;

const Sac = styled.div`
  flex: 0 0 33%;
  margin-bottom: 100px;
`;

interface IProps {
  sacs: {
    results: {
      name: "string";
      image: "string";
    }[];
  };
}
const Collection: React.FC<IProps> = ({ sacs }) => {
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
