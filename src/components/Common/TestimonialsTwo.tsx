"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const TestimonialsTwo: React.FC = () => {
  return (
    <>
      <div className="feedback-area feedback-area-two ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Testimonials</span>
            <h2>Some Lovely Feedback From Our Clients</h2>
          </div>
        </div>

        <Swiper
  spaceBetween={30}
  pagination={{
    clickable: true,
  }}
  autoplay={{
    delay: 6500,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  }}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1550: {
      slidesPerView: 4,
    },
  }}
  modules={[Autoplay, Pagination]}
  className="feedback-slides"
>
  <SwiperSlide>
    <div className="single-feedback-item border">
      <p>
        “ASN IT's commitment to excellence is evident in every interaction. They prioritize real innovation and strive to create positive customer experiences. With ASN IT, you can trust that you'll receive authentic products and services.”
      </p>
      <div className="client-info">
        <Image
          src="/images/client-image/client1.jpg"
          alt="image"
          width={150}
          height={150}
        />
        <h3>Jason Roy</h3>
        <span>Manager</span>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="single-feedback-item border">
      <p>
        “ASN IT's dedication to fostering genuine brand interactions sets them apart. They are committed to implementing innovative solutions and ensuring positive customer experiences. You can count on ASN IT for authentic products and services.”
      </p>
      <div className="client-info">
        <Image
          src="/images/client-image/client2.jpg"
          alt="image"
          width={150}
          height={150}
        />
        <h3>James Anderson</h3>
        <span>Web Developer</span>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="single-feedback-item border">
      <p>
        “ASN IT believes that authentic brand interaction is fundamental to effective communication. Their focus on real innovation and positive customer experiences ensures successful communication. Trust ASN IT for genuine products and services.”
      </p>
      <div className="client-info">
        <Image
          src="/images/client-image/client3.jpg"
          alt="image"
          width={150}
          height={150}
        />
        <h3>Sarah Taylor</h3>
        <span>Designer</span>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="single-feedback-item border">
      <p>
        “ASN IT's dedication to authentic brand interaction drives their success. They prioritize real innovations and positive customer experiences, ensuring successful communication. Choose ASN IT for genuine products and services.”
      </p>
      <div className="client-info">
        <Image
          src="/images/client-image/client4.jpg"
          alt="image"
          width={150}
          height={150}
        />
        <h3>Steven Smith</h3>
        <span>Manager</span>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="single-feedback-item border">
      <p>
        “ASN IT's belief in authentic brand interaction is evident in their approach. They prioritize real innovations and positive customer experiences, ensuring successful communication. Trust ASN IT for genuine products and services.”
      </p>
      <div className="client-info">
        <Image
          src="/images/client-image/client5.jpg"
          alt="image"
          width={150}
          height={150}
        />
        <h3>Tom Nessham</h3>
        <span>ASN IT</span>
      </div>
    </div>
  </SwiperSlide>
</Swiper>

      </div>
    </>
  );
};

export default TestimonialsTwo;
