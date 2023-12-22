import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div id="main-wrapper" className="page-wrapper">
      <div className="inner-page-header section-padding style-dark">
        <div className="container">
          <div className="page-title-inner text-center clearfix">
            <div className="heading-wrapper">
              <h1 className="h1">Pricing Tables</h1>
              <div className="lead-text">
                <p>
                  We design great products at affordable prices. Your
                  requirements are of utmost importance to us and we tailor it
                  in the most economical fashion.
                </p>
              </div>
            </div>
            <ul className="st-breadcrumb">
              <li>
                <Link href="index-standard.html">Home</Link>
              </li>
              <li className="active">
                <span>Pricing Tables</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pricing-section section-padding">
        <div className="container">
          <div className="row justify-content-center clearfix">
            <div className="col-lg-8">
              <div className="heading-wrapper text-center with-separator">
                <h2 className="h1">Pricing Plans</h2>
                <div className="lead-text">
                  <p>
                    Round the Clock support from our technical team avaialable
                    at lowest Maintenance Charges.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pricing-plans-two clearfix">
            <div className="col-lg-4 col-12">
              <div className="price-card text-center wow fadeInLeft">
                <div className="plan-cost-wrapper">
                  <div className="plan-cost">
                    <span className="plan-cost-prefix">₹</span>7
                  </div>
                  <div className="plan-validity">per student per month</div>
                </div>
                <div className="card-header">
                  <h3 className="card-title">Start-Up</h3>
                </div>
                <div className="card-body">
                  <div className="desc">
                    <p>
                      For beginners, our start up plan is priced so as to suit
                      your urgent needs.
                    </p>
                  </div>
                  <ul className="pricing-feature-list">
                    <li>Front Office / Dashboard</li>
                    <li>Student Information System</li>
                    <li>Fee Collection & Dues Management</li>
                    <li className="disabled">Employee Management</li>
                    <li>Conveyance Management</li>
                    <li className="disabled">Hostel Management</li>
                    <li className="disabled">Online Examination System</li>
                    <li className="disabled">Library System</li>
                    <li className="disabled">Stocks and Inventory</li>
                    <li>Attendance Management</li>
                    <li>Id Card Generation</li>
                    <li className="disabled">Employee Payroll Management</li>
                    <li className="disabled">Time Table</li>
                    <li>Back up Management</li>
                    <li>SMS(Message Integration)</li>
                    <li>Accounts Management</li>
                    <li>Result and Certificate Generation</li>
                    <li className="disabled">Transport Management</li>
                    <li>Multiple Reports Generation</li>
                    <li className="disabled">
                      Student Login with Fee payment Facilities
                    </li>
                    <h5>One time Setup Price is 28999/-</h5>
                  </ul>
                  <p>
                    GST(18%) will be applicable extra to all the above price.
                  </p>
                  <Link
                    href="https://www.shivaclicksoft.com/payment"
                    className="btn btn-secondary"
                  >
                    Purchase Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="price-card popular text-center wow fadeInUp">
                <div className="plan-cost-wrapper">
                  <div className="plan-cost">
                    <span className="plan-cost-prefix">₹</span>10
                  </div>
                  <div className="plan-validity">per student per month</div>
                </div>
                <div className="card-header">
                  <h3 className="card-title">Advanced</h3>
                </div>
                <div className="card-body">
                  <div className="desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec lorem nunc, semper sed metus at, lacinia viverra
                      leo.
                    </p>
                  </div>
                  <ul className="pricing-feature-list">
                    <li>Front Office / Dashboard</li>
                    <li>Student Information System</li>
                    <li>Fee Collection & Dues Management</li>
                    <li className="disabled">Employee Management</li>
                    <li>Conveyance Management</li>
                    <li className="disabled">Hostel Management</li>
                    <li className="disabled">Online Examination System</li>
                    <li className="disabled">Library System</li>
                    <li className="disabled">Stocks and Inventory</li>
                    <li>Attendance Management</li>
                    <li>Id Card Generation</li>
                    <li className="disabled">Employee Payroll Management</li>
                    <li>Time Table</li>
                    <li>Back up Management</li>
                    <li>SMS(Message Integration)</li>
                    <li>Accounts Management</li>
                    <li>Result and Certificate Generation</li>
                    <li className="disabled">Transport Management</li>
                    <li>Multiple Reports Generation</li>
                    <li>Student Login with Fee payment Facilities</li>
                    <h5>One time Setup Price is 49999/-</h5>
                  </ul>
                  <p>
                    GST(18%) will be applicable extra to all the above price.
                  </p>
                  <Link
                    href="https://www.shivaclicksoft.com/payment"
                    className="btn btn-primary"
                  >
                    Purchase Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="price-card text-center wow fadeInRight">
                <div className="plan-cost-wrapper">
                  <div className="plan-cost">
                    <span className="plan-cost-prefix">₹</span>12
                  </div>
                  <div className="plan-validity">per student per month</div>
                </div>
                <div className="card-header">
                  <h3 className="card-title">Premium</h3>
                </div>
                <div className="card-body">
                  <div className="desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec lorem nunc, semper sed metus at, lacinia viverra
                      leo.
                    </p>
                  </div>
                  <ul className="pricing-feature-list">
                    <li>Front Office / Dashboard</li>
                    <li>Student Information System</li>
                    <li>Fee Collection & Dues Management</li>
                    <li>Employee Payroll Management</li>
                    <li>Conveyance Management</li>
                    <li>Hostel Management</li>
                    <li>Online Examination System</li>
                    <li>Library Management</li>
                    <li>Stocks and Inventory</li>
                    <li>Attendance Management</li>
                    <li>Id Card Generation</li>
                    <li>Employee Payroll Management</li>
                    <li>Time Table</li>
                    <li>Back up Management</li>
                    <li>SMS(Message Integration)</li>
                    <li>Accounts Management</li>
                    <li>Result and Certificate Generation</li>
                    <li>Transport Management</li>
                    <li>Multiple Reports Generation</li>
                    <li>
                      Student login with Online Fee payment and Online Exam
                      Facilities
                    </li>
                    <h5>One time Setup Price is 69999/-</h5>
                  </ul>
                  <p>
                    GST(18%) will be applicable extra to all the above price.
                  </p>
                  <a
                    href="https://www.shivaclicksoft.com/payment"
                    className="btn btn-secondary"
                  >
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding light-gradient-bg">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="heading-wrapper with-separator">
                <h2 className="h1">
                  Take a <span>Short Drive</span> in ShikshaPlus
                </h2>
              </div>
              <div className="features-block theme-five wow fadeInRight">
                <div className="inner-box">
                  <div className="icon">
                    <Image
                      className="normal"
                      src="images/default-color/gradient-icon-1.svg"
                      alt="logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="text">
                    <h4>30-Day free trial</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec sagittis, quam ut consectetur semper, velit turpis
                    </p>
                  </div>
                </div>
              </div>
              <div className="features-block theme-five wow fadeInRight">
                <div className="inner-box">
                  <div className="icon">
                    <Image
                      className="normal"
                      src="images/default-color/gradient-icon-2.svg"
                      alt="logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="text">
                    <h4>No Credit Card Required</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec sagittis, quam ut consectetur semper, velit turpis
                    </p>
                  </div>
                </div>
              </div>
              <div className="features-block theme-five wow fadeInRight">
                <div className="inner-box">
                  <div className="icon">
                    <Image
                      className="normal"
                      src="images/default-color/gradient-icon-3.svg"
                      alt="logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="text">
                    <h4>All Features Unlocked</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec sagittis, quam ut consectetur semper, velit turpis
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="enquiry-form-box">
                <div className="form-wrapper">
                  <div className="form-header">
                    <h4>
                      Have any query? <span>Let’s Talk</span>
                    </h4>
                  </div>
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="FullName"
                        placeholder="Your Full Name"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="YourEmail"
                        placeholder="Your Email Address"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="tel"
                        className="form-control"
                        id="YourPhone"
                        placeholder="Your Phone Number"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="url"
                        className="form-control"
                        id="YourWebsite"
                        placeholder="Your Website URLs"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="NumberOfLearners"
                        placeholder="Number of Learners"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        className="btn btn-primary btn-full"
                        value="submit your enquiry"
                      />
                    </div>
                  </form>
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
