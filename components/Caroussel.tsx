// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import styled from "styled-components";
import { theme } from "../theme";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper";

const SliderWrapper = styled.div`
  margin-top: -30px;

  @media (max-width: ${theme.tablet}) {
    margin-top: 0px;
    padding: 0 20px;
  }
`;

const Caroussel = () => {
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
        <SwiperSlide>
          <Image
            src="https://i0.wp.com/farwestleather.com/wp-content/uploads/2017/10/MG_8331_1865x1250_acf_cropped.jpg?fit=1865%2C1250&ssl=1"
            width="1600"
            height="1200"
            objectFit="contain"
            alt="image1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://i2.wp.com/farwestleather.com/wp-content/uploads/2017/10/Cartable-13-3_1865x1250_acf_cropped.jpg?fit=1865%2C1250&ssl=1"
            width="1600"
            height="1200"
            objectFit="contain"
            alt="image1"
          />
        </SwiperSlide>
      </Swiper>
    </SliderWrapper>
  );
};

export default Caroussel;
