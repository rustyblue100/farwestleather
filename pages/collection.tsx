import React from "react";
import Collection from "../components/Collection";
import { NextPage } from "next";
import styled from "styled-components";
import { sanityClient, urlFor } from "../lib/sanity";

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

const collection: NextPage<IProps> = ({ sacs }) => {
  return (
    <List>
      <Collection
        sacs={sacs}
        limit={-1}
        titre="Toute la collection"
        ramdom={false}
      />
    </List>
  );
};

export default collection;

export async function getStaticProps() {
  const sacsQuery = `*[_type =="sacs"]`;

  const sacs = await sanityClient.fetch(sacsQuery);

  return {
    props: {
      sacs,
    },
  };
}
