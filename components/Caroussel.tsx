// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import styled from "styled-components";
import { theme } from "../theme";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper";
import { urlFor } from "../lib/sanity";
import { NextPage } from "next";

const SliderWrapper = styled.div`
  margin-top: 30px;
  box-sizing: border-box;
  padding: 10px;
  background-color: ${theme.themeDark};
  @media (max-width: ${theme.tablet}) {
    margin-top: 0px;
    padding: 0 20px;
  }

  img {
    background-color: ${theme.themeDark};
  }
`;

interface IProps {
  carousselData: {
    nom: string;
    images: [];
  }[];
}

const Caroussel: NextPage<IProps> = ({ carousselData }) => {
  return (
    <SliderWrapper>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        speed={2000}
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay, EffectFade]}
      >
        {carousselData[0].images?.map((slide: any, i: number) => {
          return (
            <SwiperSlide key={i}>
              <Image
                src={urlFor(slide).url()}
                width="1600"
                height="1200"
                objectFit="contain"
                alt="image1"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SliderWrapper>
  );
};

export default Caroussel;
