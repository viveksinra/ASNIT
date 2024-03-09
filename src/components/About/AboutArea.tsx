"use client";

import React from "react";
import Image from "next/image";

const AboutArea: React.FC = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <Image
                  src="/images/about-img1.png"
                  alt="image"
                  width={830}
                  height={750}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <span className="sub-title">About Us</span>
                <h2>We Strive for Customer Satisfaction</h2>
                <p>
                  ASN IT is a leading Data Digitization and scanning company in Northern India, specializing in Data Management, Scanning, and BPO services for over 8 years. Our focus is on delivering high-quality, timely, and cost-effective solutions to meet the diverse needs of our clients.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Data Entry Online/Offline
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Document Scanning Services
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Data Digitization
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> DMS Providing Services
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> BPO Services
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Call Centre Services (Inbound and Outbound)
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Infrastructure Services
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> OCR Conversion Services
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> IT Services
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Manpower Services
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about-inner-area">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our History</h3>
                  <p>
                    ASN IT has a rich history of delivering innovative solutions and ensuring positive customer experiences in communication and data management.
                  </p>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i> Setting benchmarks in data management
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Maintaining high-quality standards
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Continuous improvement in service delivery
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Building lasting relationships with clients
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our Mission</h3>
                  <p>
                    ASN IT is committed to creating value and delivering results to clients through continuous innovation and dedicated service delivery.
                  </p>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i> Providing high-quality, timely solutions
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Meeting and exceeding client expectations
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Embracing technological advancements
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Ensuring customer satisfaction at all levels
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Who We Are</h3>
                  <p>
                    ASN IT is a team of dedicated professionals driven by a passion for excellence and a commitment to delivering outstanding services to our clients.
                  </p>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i> Committed to integrity and transparency
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Providing comprehensive solutions tailored to client needs
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Embracing challenges and delivering results
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Promoting client brands and businesses effectively
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Shape Images */}
        <div className="shape-img3">
          <Image
            src="/images/shape/shape3.svg"
            alt="image"
            width={22}
            height={22}
          />
        </div>
        <div className="shape-img2">
          <Image
            src="/images/shape/shape2.svg"
            alt="image"
            width={20}
            height={20}
          />
        </div>
      </div>
    </>
  );
};

export default AboutArea;
