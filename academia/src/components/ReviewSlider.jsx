import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// Importando imagens locais
import pic1 from "../assets/img/pic-1.png";
import pic2 from "../assets/img/pic-2.png";
import pic3 from "../assets/img/pic-3.png";
import pic31 from "../assets/img/pic-31.png";

export default function ReviewSlider() {
  return (
    <div className="swiper review-slider">
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        spaceBetween={20}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide className="box">
          <div className="user">
            <img src={pic1} alt="Depoimento 1" />
            <div className="info">
              <h3>Jussara Nzola</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
        </SwiperSlide>

        <SwiperSlide className="box">
          <div className="user">
            <img src={pic2} alt="Depoimento 2" />
            <div className="info">
              <h3>Marcos José</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
        </SwiperSlide>

        <SwiperSlide className="box">
          <div className="user">
            <img src={pic3} alt="Depoimento 3" />
            <div className="info">
              <h3>Zolana Garcia</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
        </SwiperSlide>

        <SwiperSlide className="box">
          <div className="user">
            <img src={pic31} alt="Depoimento 31" />
            <div className="info">
              <h3>João Augusto</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
