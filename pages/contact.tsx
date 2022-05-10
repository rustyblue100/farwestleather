import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";
import { sanityClient, urlFor, PortableText } from "../lib/sanity";
import type { NextPage } from "next";
import Head from "next/head";

const Grid = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  gap: 100px;
  padding: 0 20px;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    margin-top: 40px;
    gap: 10px;
    flex-direction: column;
  }
`;

const Title = styled.div`
  text-align: center;
  align-items: center;
  margin: 100px auto;

  h3 {
    font-size: 12px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.themeDark};
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
    color: ${({ theme }) => theme.colors.themeDark};
  }

  .divider {
    padding-top: 20px;
    display: block;
    border-bottom: 2px solid #8cada7;
    width: 273px;
    margin: 20px auto;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobileL}) {
    margin: 40px auto 100px auto;
  }
`;
const GridItem = styled.div`
  flex: 1;
`;

const Description = styled.div`
  white-space: pre-line;
`;

const ContactForm = styled.div`
  margin-top: 40px;

  input,
  textarea {
    width: 100%;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.themeDark};
    margin-bottom: 2rem;

    :focus {
      outline: none;
      border-bottom: 2px solid ${({ theme }) => theme.colors.themeDark};
    }
  }

  p {
    color: red;
  }
`;

const SubmitButton = styled.button`
  border: none;
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.themeLight};
  background-color: ${({ theme }) => theme.colors.themePrimary};
  cursor: pointer;
`;

interface IProps {
  contactData: {
    description: string;
    image: string;
  }[];
}

const contact: NextPage<IProps> = ({ contactData }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, handleSubmit] = useForm("mwkyaveg");

  if (state.succeeded) {
    return <p>Merci! Je vous contacterai sous peu.</p>;
  }

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <>
      <Head>
        <title>Contact - Farwestleather</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Grid>
        <GridItem>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            <Image
              src={urlFor(contactData[0].image).url()}
              width="1000"
              height="2000"
              objectFit="cover"
              alt="contact"
            ></Image>
          </motion.div>
        </GridItem>
        <GridItem>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            <Title>
              <h4> Contact</h4>
              <div className="divider"></div>
            </Title>
            <Description>
              <PortableText value={contactData[0]?.description} />
            </Description>

            <ContactForm>
              <form onSubmit={handleSubmit}>
                <label htmlFor="nom">Nom</label>
                <input id="nom" type="text" name="no " />
                <ValidationError
                  prefix="Nom"
                  field="nom"
                  errors={state.errors}
                />

                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" name="email" />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <label htmlFor="tel">Téléphone</label>
                <input id="tel" type="tel" name="no " />
                <ValidationError
                  prefix="Téléphone"
                  field="telephone"
                  errors={state.errors}
                />
                <label htmlFor="tel">Message</label>
                <textarea id="message" name="message" />
                <ValidationError
                  rows={5}
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <SubmitButton type="submit" disabled={state.submitting}>
                  Soumettre
                </SubmitButton>
              </form>
            </ContactForm>
          </motion.div>
        </GridItem>
      </Grid>
    </>
  );
};

export default contact;

export async function getStaticProps() {
  const contactData = await sanityClient.fetch(`*[_type =="contact"]`);

  return {
    props: {
      contactData,
    },
  };
}
