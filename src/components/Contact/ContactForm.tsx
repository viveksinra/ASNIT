"use client";

import React, { useState } from "react";
import Image from "next/image";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission with formData
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <div className="contact-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Contact Us</span>
            <h2>Drop Us a Message for Any Query</h2>
            <p>
              Welcome to ASN IT! We are dedicated to providing exceptional service and support to our clients. Feel free to reach out to us with any questions or inquiries.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4 col-md-4">
              <div className="contact-image">
                <Image
                  src="/images/contact.png"
                  alt="image"
                  width={310}
                  height={350}
                />
              </div>
            </div>

            <div className="col-lg-8 col-md-8">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="tel"
                          name="number"
                          value={formData.number}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Your Phone Number"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          cols={30}
                          rows={6}
                          className="form-control"
                          placeholder="Your Message"
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 text-center">
                      <button type="submit" className="default-btn">
                        Send Message <span></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
