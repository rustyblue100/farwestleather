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
`;

interface IState {
  sac: {
    name: "string";
    image: "string";
  }[];
}

const Collection = () => {
  const [sacs, setSacs] = useState<IState["sac"]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getData = await fetch(
          "https://rickandmortyapi.com/api/character"
        );

        const data = await getData.json();
        setSacs(data.results);
      } catch (error) {}
    };

    fetchData();

    return () => {
      fetchData();
    };
  }, []);

  function renderSacs(): JSX.Element[] {
    return sacs.map((sac, i) => {
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
