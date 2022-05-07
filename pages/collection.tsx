import React from "react";
import Collection from "../components/Collection";
import { NextPage } from "next";
import styled from "styled-components";

interface IProps {
  data: {
    results: {
      id: number;
      name: "string";
      image: "string";
    }[];
  };
}

const List = styled.div`
  padding: 0 20px;
`;

const collection: NextPage<IProps> = ({ data }) => {
  return (
    <List>
      <Collection
        sacs={data}
        limit={-1}
        titre="Toute la collection"
        ramdom={false}
      />
    </List>
  );
};

export default collection;

export async function getStaticProps() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
