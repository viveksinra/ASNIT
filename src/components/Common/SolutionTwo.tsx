"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const SolutionTwo: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://youtu.be/KZ8wOl9vIvE?si=AkR23DmAZhdbqrXz"]}
      />

      <div
        className="solution-area ptb-100"
        style={{
          backgroundImage: `url(/images/solution-bg.jpg)`,
        }}
      >
    <div className="container">
  <div className="row align-items-center">
    <div className="col-lg-7 col-md-12">
      <div className="solution-content">
        <h2>Why Choose ASN IT? Watch this Video to Learn More!</h2>
        <p>
          Discover why ASN IT is the perfect choice for your business needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <Link href="/contact" className="default-btn">
          Contact Us <span></span>
        </Link>
      </div>
    </div>

    <div className="col-lg-5 col-md-12">
      <div className="solution-video">
        <div onClick={() => setToggler(!toggler)} className="video-btn">
          <i className="flaticon-play-button"></i>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </>
  );
};

export default SolutionTwo;
