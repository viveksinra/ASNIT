"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="feedback-area ptb-100 bg-color">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Client Testimonials</span>
            <h2>Discover What Our Clients Have to Say</h2>
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
            <div className="single-feedback-item">
              <p>
                “ASN IT has been instrumental in our success. Their dedication to delivering top-notch solutions has significantly improved our business operations. We highly recommend their services.”
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
            <div className="single-feedback-item">
              <p>
                “The team at ASN IT is incredibly professional and knowledgeable. Their expertise in digital solutions has helped us achieve our goals and exceed our expectations. We're grateful for their outstanding support.”
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
            <div className="single-feedback-item">
              <p>
                “Working with ASN IT has been a pleasure. Their team is responsive, efficient, and always delivers exceptional results. We look forward to continuing our partnership with them in the future.”
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
            <div className="single-feedback-item">
              <p>
                “ASN IT has been an invaluable partner for us. Their commitment to excellence and attention to detail sets them apart. We're grateful for their unwavering support and dedication.”
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
            <div className="single-feedback-item">
              <p>
                “Choosing ASN IT was one of the best decisions we've made for our business. Their team goes above and beyond to deliver exceptional service and results. We highly recommend their services.”
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

export default Testimonials;
