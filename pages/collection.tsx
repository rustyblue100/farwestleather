import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Collection from "../components/Collection";
import { sanityClient } from "../lib/sanity";
import { motion, useAnimation } from "framer-motion";

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
  margin-top: 60px;
  padding: 0 20px;
`;

const collection: NextPage<IProps> = ({ sacs }) => {
  const variants2 = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <motion.div
      variants={variants2}
      /*    initial="hidden"
      animate="visible" */
      transition={{ duration: 1 }}
    >
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
          titre="La collection"
          ramdom={false}
        />
      </List>
    </motion.div>
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
