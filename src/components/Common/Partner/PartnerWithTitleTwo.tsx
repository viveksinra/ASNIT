"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const PartnerWithTitleTwo: React.FC = () => {
  // Array of partner image paths
  const partnerImages = [
    "/images/partner-image/partner-img1.png",
    "/images/partner-image/partner-img2.png",
    "/images/partner-image/partner-img3.png",
    "/images/partner-image/partner-img4.png",
    "/images/partner-image/partner-img5.png",
    "/images/partner-image/partner-img6.png",
    "/images/partner-image/partner-img7.png",
    "/images/partner-image/partner-img8.png",
    "/images/partner-image/partner-img9.png",
    "/images/partner-image/partner-img10.png",
  ];

  return (
    <>
      <div className="partner-area pb-100">
        <div className="container">
          <div className="section-title">
            <h2>Our Loving Clients</h2>
          </div>

          <Swiper
            spaceBetween={30}
            navigation={true}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="partner-slides"
          >
            {partnerImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="single-partner-item">
                  <a href="#" target="_blank">
                    <Image
                      src={image}
                      alt="image"
                      width={200}
                      height={60}
                    />
                    <Image
                      src={image}
                      alt="image"
                      width={200}
                      height={60}
                    />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default PartnerWithTitleTwo;
