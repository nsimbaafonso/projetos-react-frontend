import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function HomeSlider() {
  return (
    <section className="home">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 7500, disableOnInteraction: false }}
        grabCursor={true}
        loop={true}
        spaceBetween={20}
        centeredSlides={true}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        className="home-slider"
      >
        <SwiperSlide className="slide" style={{ background: "url(/img/home.jpg) no-repeat" }}>
          <div className="content">
            <h1>Stay Fitness</h1>
            <p>Nunca deixe para mais tarde</p>
            <Link to="/agendar" className="btn">
              Agendar Agora
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide" style={{ background: "url(/img/home2.jpg) no-repeat" }}>
          <div className="content">
            <h1>TREINE COM PROPÓSITO</h1>
            <p>Seu corpo, sua melhor versão</p>
            <Link to="/agendar" className="btn">
              Agendar Agora
            </Link>
          </div>
        </SwiperSlide>

        {/* Botões de navegação */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </section>
  );
}
