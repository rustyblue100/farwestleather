import React from "react";
import Collection from "../components/Collection";
import { NextPage } from "next";

interface IProps {
  data: {
    results: {
      id: number;
      name: "string";
      image: "string";
    }[];
  };
}

const collection: NextPage<IProps> = ({ data }) => {
  return <Collection sacs={data} />;
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
