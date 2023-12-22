import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div id="main-wrapper" className="page-wrapper">
      <div className="inner-page-header section-padding style-dark">
        <div className="container">
          <div className="page-title-inner text-center clearfix">
            <div className="heading-wrapper">
              <h1 className="h1">Contact Us</h1>
              <div className="lead-text">
                <p>
                  Contact us to Completely Digitalize Your Schhol and Colleges.
                </p>
              </div>
            </div>
            <ul className="st-breadcrumb">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="active">
                <span>Contact Us</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div className="container">
          <div className="row clearfix">
            <div className="col-lg-12">
              <div className="contact-box-wrapper">
                <div className="form-box">
                  <h2 className="h4">Send us a Message</h2>
                  <div className="contact-form">
                    <form method="post">
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            id="FiratName"
                            placeholder="First Name"
                            required=""
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            id="LastName"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email Address"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="How can I help you?"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Tell me more about your requirement"
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <input
                          type="submit"
                          className="btn btn-primary"
                          value="Send Message"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="contact-details-box style-dark">
                  <h2 className="h4">Contact Information</h2>
                  <div className="contact-info">
                    <ul>
                      <li className="address-field">
                        H 70, Sector 63, Noida, U.P- 201301. Sarojini Complex,
                        Bajla Chawk, Deoghar, Jharkhand- 814112
                      </li>
                      <li className="email-field">support@shikshaplus.in</li>
                      <li className="phone-field">+91 9278845852</li>
                    </ul>
                  </div>
                  <div className="social-media-links">
                    <ul>
                      <li>
                        <Link target="_blank" href="/">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link target="_blank" href="/">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                      <li>
                        <Link target="_blank" href="/">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
