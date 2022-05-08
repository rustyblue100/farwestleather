import styled from "styled-components";
import { theme } from "../theme";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { sanityClient, urlFor, PortableText } from "../lib/sanity";

const Grid = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  gap: 100px;
  padding: 0 20px;

  @media (max-width: ${theme.tablet}) {
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
    color: ${theme.themeDark};
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
    color: ${theme.themeDark};
  }

  .divider {
    padding-top: 20px;
    display: block;
    border-bottom: 2px solid #8cada7;
    width: 273px;
    margin: 20px auto;
    text-align: center;
  }

  @media (max-width: ${theme.mobileL}) {
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
    border-bottom: 1px solid ${theme.themeDark};
    margin-bottom: 2rem;

    :focus {
      outline: none;
      border-bottom: 2px solid ${theme.themeDark};
    }
  }

  p {
    color: red;
  }
`;

const SubmitButton = styled.button`
  border: none;
  padding: 10px 15px;
  color: ${theme.themeLight};
  background-color: ${theme.themePrimary};
  cursor: pointer;
`;

const contact = ({ desc }) => {
  console.log(desc);

  interface IFormInputs {
    nom: string;
    email: string;
    tel: string;
    message: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit = (data: IFormInputs) => console.log(data);

  console.log(errors?.nom && errors);

  return (
    <Grid>
      <GridItem>
        <Image
          src="https://i2.wp.com/farwestleather.com/wp-content/uploads/2017/03/IMG_2124.jpg?w=685&ssl=1"
          width="600"
          height="1000"
          alt="contact"
        ></Image>
      </GridItem>
      <GridItem>
        <Title>
          <h4> Contact</h4>
          <div className="divider"></div>
        </Title>
        <Description>
          <PortableText value={desc[0]?.description} />
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
                rows="5"
                {...register("message", { required: "Ce champ est requis" })}
              />
              {errors?.message && <p>{errors.message.message}</p>}
            </div>

            <SubmitButton type="submit">Soumettre</SubmitButton>
          </form>
        </ContactForm>
      </GridItem>
    </Grid>
  );
};

export default contact;

export async function getStaticProps() {
  const desc = await sanityClient.fetch(`*[_type =="contact"]`);

  return {
    props: {
      desc,
    },
  };
}
