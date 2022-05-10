import styled from "styled-components";

import Image from "next/image";
import { useForm } from "react-hook-form";
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

  @media (max-width: ${({ theme }) => theme.colors.mobileL}) {
    margin: 80px auto 100px auto;
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

interface IFormInputs {
  nom: string;
  email: string;
  tel: string;
  message: string;
}

const contact: NextPage<IProps> = ({ contactData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm<IFormInputs>();

  const onSubmit = (data: IFormInputs) => console.log(data);

  console.log(errors?.nom && errors);

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
          <Image
            src={urlFor(contactData[0].image).url()}
            width="1000"
            height="2000"
            objectFit="cover"
            alt="contact"
          ></Image>
        </GridItem>
        <GridItem>
          <Title>
            <h4> Contact</h4>
            <div className="divider"></div>
          </Title>
          <Description>
            <PortableText value={contactData[0]?.description} />
          </Description>

          <ContactForm>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label>Nom</label>
                <input
                  type="text"
                  {...register("nom", { required: "Ce champ est requis" })}
                />
                {errors?.nom && <p>{errors.nom.message}</p>}
              </div>
              <div>
                <label>Adresse courriel</label>
                <input
                  type="email"
                  {...register("email", { required: "Ce champ est requis" })}
                />
                {errors?.email && <p>{errors.email.message}</p>}
              </div>
              <div>
                <label>Téléphone</label>
                <input type="tel" {...register("tel", {})} />
                {errors?.tel && <p>{errors.tel.message}</p>}
              </div>
              <div>
                <label>Message</label>
                <textarea
                  rows={5}
                  {...register("message", { required: "Ce champ est requis" })}
                />
                {errors?.message && <p>{errors.message.message}</p>}
              </div>

              <SubmitButton type="submit">Soumettre</SubmitButton>
            </form>
          </ContactForm>
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
