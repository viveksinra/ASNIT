"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ServicesOverview: React.FC = () => {
  return (
    <>
      <div className="overview-area ptb-100">
        <div className="container">
          <div className="overview-box it-overview">


          <div className="overview-box it-overview">
            <div className="overview-content">
              <div className="content">
                <h2>Data Entry Services</h2>
                <p>
                ASN IT offers top-notch data entry services, including data conversion, forms processing, document management, and more, ensuring accuracy and efficiency in every project.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Data Entry Online/ Offline
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Data Digitization
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Document Scanning Services
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      DMS Providing Services
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Data Scrapping
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Backup Systems
                    </span>
                  </li>
                </ul>

                <div className="rm-btn">
                  <Link href="/services/2" className="default-btn">
                    Read More <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div 
              className="overview-image"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="image">
                <Image
                  src="/images/services/it-service3.png"
                  alt="image"
                  width={600}
                  height={463}
                />
              </div>
            </div>
          </div>


          <div className="overview-box">
            <div 
              className="overview-image"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="image">
                <Image
                  src="/images/services/it-service4.png"
                  alt="image"
                  width={600}
                  height={368}
                />
              </div>
            </div>

            <div className="overview-content">
              <div className="content right-content">
                <h2>BPO Services</h2>
                <p>
                ASN IT offers reliable BPO services, including business development, tele marketing, inbound and outbound call center services, leveraging IT capabilities for successful outcomes.
                </p>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Content Marketing
                  </h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> SEO Optimization
                  </h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Social Marketing
                  </h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem.
                  </p>
                </div>
              </div>
            </div>
</div>



            <div className="overview-content">
              <div className="content">
                <h2>Digital Marketing</h2>
                <p>
                  We believe brand interaction is key to communication. Real
                  innovations and positive customer experience are the heart of
                  success.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      SEO Marketing
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Email Marketing
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Facebook Marketing
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Data Scraping
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Social Marketing
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Youtube Marketing
                    </span>
                  </li>
                </ul>

                <div className="rm-btn">
                  <Link href="/services/2" className="default-btn">
                    Read More <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div 
              className="overview-image"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="image">
                <Image
                  src="/images/services/it-service1.png"
                  alt="image"
                  width={852}
                  height={580}
                />
              </div>
            </div>
          </div>

          <div className="overview-box it-overview">
            <div 
              className="overview-image"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="image">
                <Image
                  src="/images/services/it-service2.png"
                  alt="image"
                  width={770}
                  height={582}
                />
              </div>
            </div>

            <div className="overview-content">
              <div className="content right-content">
                <h2>Web Design & Development</h2>
                <p>
                  We believe brand interaction is key to communication. Real
                  innovations and positive customer experience are the heart of
                  success.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Responsive Design
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      UI / UX Design
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Mobile App Development
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Laravel Development
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      React Development
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bxs-badge-check"></i>
                      Angular Development
                    </span>
                  </li>
                </ul>

                <div className="rm-btn">
                  <Link href="/services/2" className="default-btn">
                    Read More <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </>
  );
};

export default ServicesOverview;
