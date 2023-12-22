"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer footer-theme-two">
      <div className="container">
        <div className="main-footer style-dark">
          <div className="row">
            <div className="col-lg-5">
              <div className="widget">
                <div className="text-widget">
                  <div className="about-info">
                    <div className="image-wrapper">
                      <Image
                        src={require("../../public/images/shikshapluslogo.png")}
                        alt="logo"
                        width={900}
                        height={60}
                      />
                    </div>
                  </div>
                  <div className="newsletter-form style-two align-left">
                    <h3>Sign up and receive the latest news via email.</h3>
                    <form method="post">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="EmailInput"
                          placeholder="Enter email address"
                          required=""
                        />
                      </div>
                      <button type="submit">Subscribe Now!</button>
                    </form>
                  </div>
                  <div className="social-media-links">
                    <h3>Follow Us:</h3>
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
            <div className="col-lg-4">
              <div className="widget">
                <div className="widget-title">
                  <h3 className="title">Contact Inforamtion</h3>
                </div>
                <div className="text-widget">
                  <div className="contact-info theme-two">
                    <ul>
                      <li className="address-field">
                        <label>Noida Office</label>H 70, Sector 63, Noida U.P
                        201301
                      </li>
                      <li className="address-field">
                        <label>Riddhi Siddhi Tower 2nd Floor</label>, Bajla
                        Chowk, Deoghar, Jharkhand 814112
                      </li>
                      <li className="email-field">Support@shikshaplus.in</li>
                      <li className="phone-field">9278845852</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="widget">
                <div className="widget-title">
                  <h3 className="title">Useful Links</h3>
                </div>
                <div className="text-widget">
                  <div className="footer-nav">
                    <ul>
                      <li>
                        <Link href="/">Trust & Safety</Link>
                      </li>
                      <li>
                        <Link href="/">Cookie Policy</Link>
                      </li>
                      <li>
                        <Link href="/">Contact Us</Link>
                      </li>
                      <li>
                        <Link href="/">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link href="/">Terms of Service</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-bar style-dark">
          <div className="copyright-text text-center">
            © Copyright Shiksha Plus 2021. Made with{" "}
            <i className="fas fa-heart"></i> by{" "}
            <Link href="https://shivaclicksoft.com/" target="_blank">
              <strong>Shiva Clicksoft</strong>
            </Link>
            .
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
