// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper";

const Caroussel: React.FC = () => {
  return (
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
          width="1400"
          height="800"
          objectFit="contain"
          alt="image1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://i2.wp.com/farwestleather.com/wp-content/uploads/2017/10/Cartable-13-3_1865x1250_acf_cropped.jpg?fit=1865%2C1250&ssl=1"
          width="1400"
          height="800"
          objectFit="contain"
          alt="image1"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Caroussel;
