import React from "react";
import Link from "next/link";

const OurServices: React.FC = () => {
  return (
    <>
      <div className="pt-100 pb-70 gray-bg">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              ASN IT offers a comprehensive range of services to meet your business needs. From data digitization to BPO services, we provide high-quality, time-bound, and cost-effective solutions.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-white center">
                <div className="icon">
                  <i className="bx bx-edit"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/services/data-entry">
                    Data Entry Services
                  </Link>
                </h3>
                <p>
                  ASN IT offers top-notch data entry services, including data conversion, forms processing, document management, and more, ensuring accuracy and efficiency in every project.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-white center">
                <div className="icon">
                  <i className="bx bx-scan"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/services/document-scanning">
                    Document Scanning Services
                  </Link>
                </h3>
                <p>
                  With state-of-the-art scanning equipment and expertise, ASN IT specializes in document scanning services for various document types, ensuring accuracy and efficiency.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-white center">
                <div className="icon">
                  <i className="bx bx-network-chart"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/services/bpo">
                    BPO Services
                  </Link>
                </h3>
                <p>
                  ASN IT offers reliable BPO services, including business development, tele marketing, inbound and outbound call center services, leveraging IT capabilities for successful outcomes.
                </p>
              </div>
            </div>

            
            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-white center">
                <div className="icon">
                  <i className="bx bx-laptop"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/services/details">
                    Web Development
                  </Link>
                </h3>
                <p>
                  Our web development solutions are crafted with precision and expertise, ensuring a seamless and user-friendly online experience for your audience.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-white center">
                <div className="icon">
                  <i className="bx bxs-megaphone"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/services/details">
                    Digital Marketing
                  </Link>
                </h3>
                <p>
                  Our digital marketing strategies are designed to boost your online presence and drive targeted traffic to your website, resulting in increased brand visibility and sales.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one bg-white center">
                <div className="icon">
                  <i className="bx bx-mobile-alt"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <Link href="/services/details">
                    Mobile App Development
                  </Link>
                </h3>
                <p>
                  Our mobile app development services combine creativity and innovation to deliver custom solutions that meet your business objectives and exceed your expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
