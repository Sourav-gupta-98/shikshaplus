"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    setTimeout(function () {
      var my_awesome_script1 = document.createElement("script");
      my_awesome_script1.setAttribute("src", "/js/jquery.min.js");
      document.head.appendChild(my_awesome_script1);

      var my_awesome_script = document.createElement("script");
      my_awesome_script.setAttribute("src", "/js/jquery-migrate.min.js");
      document.head.appendChild(my_awesome_script);

      var my_awesome_script5 = document.createElement("script");
      my_awesome_script5.setAttribute("src", "/js/bootstrap.bundle.min.js");
      document.head.appendChild(my_awesome_script5);

      var my_awesome_script6 = document.createElement("script");
      my_awesome_script6.setAttribute("src", "/js/jquery.easing.min.js");
      document.head.appendChild(my_awesome_script6);

      var my_awesome_script7 = document.createElement("script");
      my_awesome_script7.setAttribute("src", "/js/scrollspy.min.js");
      document.head.appendChild(my_awesome_script7);

      var my_awesome_script8 = document.createElement("script");
      my_awesome_script8.setAttribute("src", "/js/appear.js");
      document.head.appendChild(my_awesome_script8);

      var my_awesome_script4 = document.createElement("script");
      my_awesome_script4.setAttribute("src", "/js/wow.min.js");
      document.head.appendChild(my_awesome_script4);

      var my_awesome_script2 = document.createElement("script");
      my_awesome_script2.setAttribute("src", "/js/slick.min.js");
      document.head.appendChild(my_awesome_script2);

      setTimeout(function () {
        var my_awesome_script3 = document.createElement("script");
        my_awesome_script3.setAttribute("src", "/js/dcode.js");
        document.head.appendChild(my_awesome_script3);
      }, 10);
    }, 500);
  }, []);
  return (
    <>
      <div className="box-wrapper">
        <div id="main-wrapper" className="page-wrapper">
          <div className="page-header section-padding full-height dc-five">
            <div className="container">
              <div className="row align-items-center flex-row-reverse">
                <div className="col-lg-6">
                  <div className="image-wrapper">
                    <Image
                      src={require("../../public/images/default-color/erp-system-img.png")}
                      alt="logo"
                      width={600}
                      height={600}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="heading-wrapper with-separator wow fadeInLeft"
                    data-wow-delay="0.2s"
                  >
                    <h1>
                      How schools benefit from Shiksha Plus
                      <span>ERP Systems</span>
                    </h1>
                  </div>
                  <div
                    className="text-wrapper wow fadeInLeft"
                    data-wow-delay="0.4s"
                  >
                    <p>
                      The Online Shiksha Plus ERP Systems allow educational
                      institutions to work more efficiently, syncing with the
                      demands of modern-day education. The incorporation of
                      technology creates a competitive edge for products and
                      services in this sector.
                    </p>
                  </div>
                  <h5>
                    Education ERP software for the administration of schools,
                    colleges and universities.
                  </h5>
                  <br />
                  <div
                    className="btn-wrapper wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <Link className="btn btn-primary" href="/">
                      Book A Demo
                    </Link>
                    <Link className="btn btn-outline-primary" href="/">
                      <i className="fas fa-play-circle"></i>Watch Video
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="features-section section-padding">
            <div className="container">
              <div className="row clearfix align-items-center justify-content-between">
                <div className="col-lg-5">
                  <div className="heading-wrapper with-separator">
                    <h2 className="h1">
                      Why <span>Shiksha Plus ERP</span> Systems?
                    </h2>
                  </div>

                  <div className="text-wrapper">
                    <p className="lead-text">
                      An easy to use, affordable solution for any educational
                      organization
                    </p>
                    <p>
                      ShikshaPlus is capable enough to manage the most complex
                      processes of the educational enterprises of varying sizes
                      in an efficient manner. All the aspects of the
                      administrative domain are ably backed by the ShikshaPlus
                      ERP System which is an easy to use and affordable
                      solutions provider to an educational enterprise.
                    </p>
                  </div>
                  <div className="btn-wrapper">
                    <Link href="#" className="btn btn-primary">
                      Discover More
                    </Link>
                  </div>
                  <div className="d-lg-none d-xl-block empty-space-30"></div>
                </div>
                <div className="col-lg-6">
                  <div className="row inner-row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="features-block theme-one wow fadeInUp">
                        <div className="inner-box">
                          <div className="icon">
                            <Image
                              className="normal"
                              src={require("../../public/images/default-color/icon-2.svg")}
                              alt="logo"
                              width={100}
                              height={100}
                            />
                            <Image
                              className="hover"
                              src={require("../../public/images/default-color/icon-2-light.svg")}
                              alt="logo"
                              width={100}
                              height={100}
                            />
                          </div>
                          <div className="text">
                            <h4>Easy to implement and use</h4>
                            <p>
                              It incorporates seamless trasition from the
                              complex manual interventions into the digital
                              mode.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div
                        className="features-block theme-one wow fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        <div className="inner-box">
                          <div className="icon">
                            <Image
                              className="normal"
                              src={require("../../public/images/default-color/icon-24.svg")}
                              alt="logo"
                              width={100}
                              height={100}
                            />
                            <Image
                              className="hover"
                              src={require("../../public/images/default-color/icon-24-light.svg")}
                              alt="logo"
                              width={100}
                              height={100}
                            />
                          </div>
                          <div className="text">
                            <h4>Provides Custom Dashboards</h4>
                            <p>
                              With user-friendly dashboards make it easy for
                              students, teachers, and administrators to access
                              everything they need to online, from anywhere in
                              the world.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div
                        className="features-block theme-one wow fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        <div className="inner-box">
                          <div className="icon">
                            <Image
                              className="normal"
                              src={require("../../public/images/default-color/icon-4.svg")}
                              alt="logo"
                              width={100}
                              height={100}
                            />
                            <Image
                              className="hover"
                              src={require("../../public/images/default-color/icon-4-light.svg")}
                              alt="logo"
                              width={100}
                              height={100}
                            />
                          </div>
                          <div className="text">
                            <h4>Access data anywhere anytime</h4>
                            <p>
                              The data stored can be accessed easily anywhere,
                              anytime resulting in a solid communication loop
                              between teachers, parents and students.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div
                        className="features-block theme-one wow fadeInUp"
                        data-wow-delay="0.4s"
                      >
                        <div className="inner-box">
                          <div className="icon">
                            <Image
                              className="normal"
                              src={require("../../public/images/default-color/icon-25.svg")}
                              alt="logo"
                              width={100}
                              height={100}
                            />
                            <Image
                              className="hover"
                              src={require("../../public/images/default-color/icon-25-light.svg")}
                              alt="logo"
                              width={100}
                              height={100}
                            />
                          </div>
                          <div className="text">
                            <h4>A cost-effective solution</h4>
                            <p>
                              There are several operational efficiencies like
                              low-cost maintenance services, reduced management
                              staff, automation of the operations.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-padding border-top">
            <div className="container">
              <div className="row clearfix align-items-center">
                <div className="col-lg-6">
                  <div className="image-wrapper">
                    <Image
                      src={require("../../public/images/default-color/erp-mobileapp-features.png")}
                      alt="logo"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="heading-wrapper with-separator">
                    <h2 className="h1">
                      App fledged with <span>features</span>
                    </h2>
                  </div>
                  <div className="text-wrapper">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean sodales dictum viverra. Nam gravida dignissim eros.
                      Vivamus congue erat ante, volutpat dictum neque dignissim
                      eget.
                    </p>
                    <ul className="list-style-one two-col">
                      <li>
                        <strong>School Calendar</strong>
                      </li>
                      <li>
                        <strong>Attendance Report</strong>
                      </li>
                      <li>
                        <strong>Notice-board</strong>
                      </li>
                      <li>
                        <strong>Exam Report</strong>
                      </li>
                      <li>
                        <strong>Online Eamination</strong>
                      </li>
                      <li>
                        <strong>Library</strong>
                      </li>
                      <li>
                        <strong>Institution Fees</strong>
                      </li>
                      <li>
                        <strong>Gallery</strong>
                      </li>
                      <li>
                        <strong>Online Fee Payment</strong>
                      </li>
                      <li>
                        <strong>Home work</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="benefits-section section-padding style-dark dark-bg gradient-heading-bg">
            <div className="container">
              <div className="row clearfix justify-content-center">
                <div className="col-lg-8">
                  <div className="heading-wrapper text-center">
                    <h2 className="h1">
                      <span>Benefits</span> of Shiksha Plus ERP Software
                    </h2>
                    <div className="lead-text">
                      <p>
                        ShikshaPlus school management system is more than just a
                        Software. It provides the excellent way to
                        systematically operate the school. It automates all your
                        to-do activities such as managing Administration,
                        Academics, Teachers and students.
                      </p>
                    </div>
                  </div>
                  <div className="empty-space-60 clearfix"></div>
                </div>
              </div>
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6">
                  <div className="features-block theme-two wow fadeInUp">
                    <div className="inner-box">
                      <div className="text">
                        <h4>Technology Integration</h4>
                        <p>
                          Efficient data management, easy to use and
                          accessibility along with the optimal utilization of
                          available resources are the hallmark of our Shiksha
                          Plus ERP system.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="features-block theme-two wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="inner-box">
                      <div className="text">
                        <h4>Flexibility</h4>
                        <p>
                          {" "}
                          The stakeholders can access the software from any
                          remote locations. They just need to coome up with the
                          online credentials of the online educational ERP
                          portal.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="features-block theme-two wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="inner-box">
                      <div className="text">
                        <h4>Paperless Administration</h4>
                        <p>
                          Shiksha Plus are very apt in managing and storing
                          large amount of complex data online with minimum fuss.
                          It significantly reduces data compilation and storage
                          physically.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="features-block theme-two wow fadeInUp">
                    <div className="inner-box">
                      <div className="text">
                        <h4>Productivity</h4>
                        <p>
                          Apt in organizing & managing large data in a swift
                          manner, which stimulates academic productivity. The
                          educational institutes can focus on other domains with
                          minimum distractions.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="features-block theme-two wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="inner-box">
                      <div className="text">
                        <h4>Performance</h4>
                        <p>
                          Shiksha Plus boosts effective collaboration with the
                          admisitrative and academic wings, transparency, higher
                          student enrollment ratio and reduction of workload.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="features-block theme-two wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="inner-box">
                      <div className="text">
                        <h4>Information Accessibility</h4>
                        <p>
                          The stakeholders can access the information from any
                          remote locations. They just need to coome up with the
                          online credentials. Use of technology instills
                          accountability and transparency.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="module-section section-padding">
            <div className="container">
              <div className="row clearfix justify-content-center">
                <div className="col-lg-8">
                  <div className="heading-wrapper with-separator text-center">
                    <h2 className="h1">
                      Shiksha Plus Provides <span>Premium Modules</span>
                    </h2>
                    <div className="lead-text">
                      <p>
                        ShikshaPlus School Management Software has a range of
                        modules in a single system. The modules help to manage
                        lengthy procedures like admission management, fee
                        management, campus recruitment, account management,
                        staff management, transport management and many more.
                        Some core modules that school management software comes
                        with are listed here:-
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix">
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="features-block theme-three wow fadeInUp">
                    <div className="inner-box">
                      <div className="icon">
                        <Image
                          className="normal"
                          src={require("../../public/images/st-icon-1.svg")}
                          alt="logo"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="text">
                        <h4>Fee Collection</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div
                    className="features-block theme-three wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="inner-box">
                      <div className="icon">
                        <Image
                          className="normal"
                          src={require("../../public/images/st-icon-2.svg")}
                          alt="logo"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="text">
                        <h4>Library</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div
                    className="features-block theme-three wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="inner-box">
                      <div className="icon">
                        <Image
                          className="normal"
                          src={require("../../public/images/st-icon-3.svg")}
                          alt="logo"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="text">
                        <h4>Human Resource</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div
                    className="features-block theme-three wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="inner-box">
                      <div className="icon">
                        <Image
                          className="normal"
                          src={require("../../public/images/st-icon-4.svg")}
                          alt="logo"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="text">
                        <h4>Transport</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div
                    className="features-block theme-three wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <div className="inner-box">
                      <div className="icon">
                        <Image
                          className="normal"
                          src={require("../../public/images/st-icon-5.svg")}
                          alt="logo"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="text">
                        <h4>Examination</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div
                    className="features-block theme-three wow fadeInUp"
                    data-wow-delay="1s"
                  >
                    <div className="inner-box">
                      <div className="icon">
                        <Image
                          className="normal"
                          src={require("../../public/images/st-icon-6.svg")}
                          alt="logo"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="text">
                        <h4>Student Info</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="features-block theme-three wow fadeInUp">
                    <div className="inner-box">
                      <div className="icon">
                        <Image
                          className="normal"
                          src={require("../../public/images/st-icon-7.svg")}
                          alt="logo"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="text">
                        <h4>Expenses</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div
                    className="features-block theme-three wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="inner-box">
                      <div className="icon">
                        <Image
                          className="normal"
                          src={require("../../public/images/st-icon-8.svg")}
                          alt="logo"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="text">
                        <h4>Attendance</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div
                    className="features-block theme-three wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="inner-box">
                      <div className="icon">
                        <Image
                          className="normal"
                          src={require("../../public/images/st-icon-9.svg")}
                          alt="logo"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="text">
                        <h4>Inventory</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div
                    className="features-block theme-three wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="inner-box">
                      <div className="icon">
                        <Image
                          className="normal"
                          src={require("../../public/images/st-icon-10.svg")}
                          alt="logo"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="text">
                        <h4>Communicate</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div
                    className="features-block theme-three wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <div className="inner-box">
                      <div className="icon">
                        <Image
                          className="normal"
                          src={require("../../public/images/st-icon-11.svg")}
                          alt="logo"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="text">
                        <h4>Home work</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div
                    className="features-block theme-three wow fadeInUp"
                    data-wow-delay="1s"
                  >
                    <div className="inner-box">
                      <div className="icon">
                        <Image
                          className="normal"
                          src={require("../../public/images/st-icon-11c.png")}
                          alt="logo"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="text">
                        <h4>Hostel</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div
                    className="features-block theme-three wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <div className="inner-box">
                      <div className="icon">
                        <Image
                          className="normal"
                          src={require("../../public/images/st-icon-11d.png")}
                          alt="logo"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="text">
                        <h4>Payroll</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div
                    className="features-block theme-three wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <div className="inner-box">
                      <div className="icon">
                        <Image
                          className="normal"
                          src={require("../../public/images/id.png")}
                          alt="logo"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="text">
                        <h4>Id Card</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div
                    className="features-block theme-three wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <div className="inner-box">
                      <div className="icon">
                        <Image
                          className="normal"
                          src={require("../../public/images/st-icon-11a.png")}
                          alt="logo"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="text">
                        <h4>Result</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div
                    className="features-block theme-three wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <div className="inner-box">
                      <div className="icon">
                        <Image
                          className="normal"
                          src={require("../../public/images/st-icon-4.svg")}
                          alt="logo"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="text">
                        <h4>Admission</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div
                    className="features-block theme-three wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <div className="inner-box">
                      <div className="icon">
                        <Image
                          className="normal"
                          src={require("../../public/images/st-icon-11b.png")}
                          alt="logo"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="text">
                        <h4>Accounts</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div
                    className="features-block theme-three wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <div className="inner-box">
                      <div className="icon">
                        <Image
                          className="normal"
                          src={require("../../public/images/st-icon-11.png")}
                          alt="logo"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="text">
                        <h4>Online Payments</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="screenshot-section section-padding">
            <div className="container">
              <div className="row justify-content-center clearfix style-dark">
                <div className="col-lg-8">
                  <div className="heading-wrapper text-center">
                    <h2 className="h1">Software Screen Shots</h2>
                    <div className="lead-text">
                      <p>
                        An Extraordinary ERP Solution for Education
                        Institutions..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix">
                <div className="col-lg-12">
                  <div className="ss-wrapper">
                    <Image
                      className="laptop-img-bg"
                      src={require("../../public/images/laptop-screen.png")}
                      alt="logo"
                      width={1250}
                      height={600}
                    />
                    <div className="screenshot-slider text-center">
                      <div className="item">
                        <Image
                          src={require("../../public/images/sp1.png")}
                          alt="logo"
                          width={800}
                          height={460}
                        />
                      </div>
                      <div className="item">
                        <Image
                          src={require("../../public/images/sp2.png")}
                          alt="logo"
                          width={800}
                          height={460}
                        />
                      </div>
                      <div className="item">
                        <Image
                          src={require("../../public/images/sp3.png")}
                          alt="logo"
                          width={800}
                          height={460}
                        />
                      </div>
                      <div className="item">
                        <Image
                          src={require("../../public/images/sp4.png")}
                          alt="logo"
                          width={800}
                          height={460}
                        />
                      </div>
                      <div className="item">
                        <Image
                          src={require("../../public/images/sp3.png")}
                          alt="logo"
                          width={800}
                          height={460}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-section style-two section-padding">
            <div className="container">
              <div className="row clearfix style-dark">
                <div className="col-lg-8">
                  <div className="heading-wrapper">
                    <h2 className="h1">
                      Happy Clients <span>Feedback</span>
                    </h2>
                    <div className="lead-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis finibus mi id elit gravida, quis tincidunt purus
                        fringilla. Aenean convallis a neque non pellentesque.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix">
                <div className="col-lg-12">
                  <div className="client-testimonial theme-two">
                    <div className="testimonial-slider">
                      <div className="item">
                        <div className="testimonial-text">
                          <blockquote>
                            Cum et essent similique. Inani propriae menandri sed
                            in. Pericula expetendis has no, quo populo
                            forensibus contentiones et, nibh error in per. Vis
                            in tritani debitis delicatissimi, error omnesque
                            invenire usu ex, qui illud nonumes ad.
                          </blockquote>
                          <div className="client-info">
                            <h5>Andy Sant</h5>
                            <p>Founder Coinpool</p>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="testimonial-text">
                          <blockquote>
                            Its all good. I am really satisfied with software.
                            Pericula expetendis has no, quo populo forensibus
                            contentiones et, nibh error in per. Vis in tritani
                            debitis delicatissimi, error omnesque invenire usu
                            ex, qui illud nonumes ad.
                          </blockquote>
                          <div className="client-info">
                            <h5>Dan Kaul</h5>
                            <p>IT Consultant</p>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="testimonial-text">
                          <blockquote>
                            Pericula expetendis has no, quo populo forensibus
                            contentiones et, nibh error in per. Vis in tritani
                            debitis delicatissimi, error omnesque invenire usu
                            ex, qui illud nonumes ad. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Aenean sodales
                            dictum viverra.
                          </blockquote>
                          <div className="client-info">
                            <h5>Saru Matt</h5>
                            <p>Customer</p>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="testimonial-text">
                          <blockquote>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas in lacus consectetur, fermentum nisi
                            vel, aliquet erat. In hac habitasse platea dictumst.
                            Orci varius natoque penatibus et magnis dis
                            parturient montes.
                          </blockquote>
                          <div className="client-info">
                            <h5>Yommi Pat</h5>
                            <p>Customer</p>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="testimonial-text">
                          <blockquote>
                            Nam rutrum, eros nec consequat eleifend, quam est
                            sodales mauris, eget dignissim lacus sem at erat.
                            Vivamus eget semper nibh. Nullam dignissim lectus
                            metus, eget dapibus massa vehicula et.
                          </blockquote>
                          <div className="client-info">
                            <h5>Shreyn S</h5>
                            <p>Data Science Enthusiastic</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-section section-padding style-dark">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="call-to-action-content i-text-center">
                    <h2 className="h1">
                      Do you have any questions?{" "}
                      <span className="special-fonts">
                        We are happy to help you.
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="call-to-action-btn text-right i-text-center">
                    <Link
                      href="contact"
                      className="btn btn-primary btn-light btn-large"
                    >
                      Contact Us Now!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="companies-section section-padding pt-0">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="companies-logo grid-view">
                    <div className="item">
                      <div className="logo-wrapper">
                        <Image
                          src={require("../../public/images/logo1.png")}
                          alt="logo"
                          width={300}
                          height={100}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="logo-wrapper">
                        <Image
                          src={require("../../public/images/logo.png")}
                          alt="logo"
                          width={300}
                          height={100}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="logo-wrapper">
                        <Image
                          src={require("../../public/images/logo3.png")}
                          alt="logo"
                          width={300}
                          height={100}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="logo-wrapper">
                        <Image
                          src={require("../../public/images/logo4.png")}
                          alt="logo"
                          width={300}
                          height={100}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="logo-wrapper">
                        <Image
                          src={require("../../public/images/logo-d112.png")}
                          alt="logo"
                          width={300}
                          height={100}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="logo-wrapper">
                        <Image
                          src={require("../../public/images/logofiitjee.png")}
                          alt="logo"
                          width={300}
                          height={100}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="logo-wrapper">
                        <Image
                          src={require("../../public/images/logo2.png")}
                          alt="logo"
                          width={300}
                          height={100}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="logo-wrapper">
                        <Image
                          src={require("../../public/images/logosit.png")}
                          alt="logo"
                          width={300}
                          height={100}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="logo-wrapper">
                        <Image
                          src={require("../../public/images/logodds.png")}
                          alt="logo"
                          width={300}
                          height={100}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="logo-wrapper">
                        <Image
                          src={require("../../public/images/logoisd.png")}
                          alt="logo"
                          width={300}
                          height={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
