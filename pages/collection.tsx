import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Collection from "../components/Collection";
import { sanityClient } from "../lib/sanity";

interface IProps {
  sacs: {
    nom: string;
    images: [];
    description: string;
    prix: string;
    credit: string;
  }[];
}

const List = styled.div`
  padding: 0 20px;
`;

const collection: NextPage<IProps> = ({ sacs }) => {
  return (
    <>
      <Head>
        <title>Collection - Farwestleather</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <List>
        <Collection
          sacs={sacs}
          limit={-1}
          titre="Toute la collection"
          ramdom={false}
        />
      </List>
    </>
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
