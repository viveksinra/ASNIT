"use client";

import React from "react";
import Image from "next/image";

interface SidebarModalProps {
  active: string;
  onClick: (active: boolean) => void;
}

const SidebarModal: React.FC<SidebarModalProps> = ({ active, onClick }) => {
  const closeModal = (): void => {
    onClick(false);
  };

  return (
    <>
      <div className={`sidebar-modal ${active}`}>
        <div className="sidebar-modal-inner">
          <div className="sidebar-about-area">
            <div className="title">
              <h2>About Us</h2>
              <p>
              We Understand that in a growing IT world, there are many choices
available to select an IT Services Partner. Our customer chooses us
because We are focused on providing complete customer Satisfaction.
The ultimate goal of ASN IT is to have its own identity in BPO industry
as a most trusted service provider in all aspects and a one stop
solution for high quality, time bound and cost effective data
management services.
              </p>
            </div>
          </div>

      

          <div className="sidebar-contact-area">
            <div className="contact-info">
              <div className="contact-info-content">
                <h2>
                  <span className="main-color">+919284202612</span>
                  <span className="or">OR</span>
                  <span>asnitcorporate@gmail.com</span>
                </h2>

                <ul className="social">
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/viveksinra" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <span
            onClick={closeModal}
            className="close-btn sidebar-modal-close-btn"
          >
            <i className="flaticon-close"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default SidebarModal;
