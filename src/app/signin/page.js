/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();

  const dashboard = () => {
    router.push("/dashboard");
  };

  return (
    <div id="main-wrapper" className="page-wrapper">
      <div className="dc-signin theme-two">
        <div className="signin-wrapper" style={{ marginTop: "100px" }}>
          <div className="intro-box">
            <div className="intro-content style-dark">
              <Image
                src="/images/shikshapluslogo.png"
                className="logo"
                alt="Shiksha Plus"
                width={400}
                height={100}
              />
              <div className="heading-wrapper">
                <h2 className="h1">
                  Welcome to <span>Shiksha Plus</span>
                </h2>
              </div>
              <div className="text-wrapper">
                <p>
                  An easy to use, affordable solution for any educational
                  organization.
                </p>
              </div>
              <div className="btn-wrapper">
                <Link className="btn btn-primary btn-light" href="/">
                  Discover More
                </Link>
              </div>
            </div>
            <div className="st-tab-btn">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    data-toggle="tab"
                    href="#Signin"
                    role="tab"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    data-toggle="tab"
                    href="#SignUp"
                    role="tab"
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="form-box">
            <div className="st-tab-content">
              <div className="tab-content">
                <div className="tab-pane active" id="SignIn" role="tabpanel">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email/Username"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                      />
                    </div>
                    <div className="form-group text-center">
                      <Link href="/" className="btn link-btn forgot-link">
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="form-group">
                      <button
                        className="btn btn-primary btn-full"
                        onClick={dashboard}
                      >
                        Sign In
                      </button>
                    </div>
                    <div className="or">
                      <span>or</span>
                    </div>

                    <div className="form-group">
                      <button className="btn btn-primary btn-full email-btn">
                        Continue with Email
                      </button>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary btn-full facebook-btn">
                        Continue with Facebook
                      </button>
                    </div>
                  </form>
                </div>
                <div className="tab-pane" id="SignUp" role="tabpanel">
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Full Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email Address"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                      />
                    </div>
                    <div className="form-group text-center">
                      <label>
                        <input type="checkbox" required="required" /> I accept
                        the policy and terms
                      </label>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary btn-full">
                        Sign Up
                      </button>
                    </div>
                    <div className="or">
                      <span>or</span>
                    </div>

                    <div className="form-group">
                      <button className="btn btn-primary btn-full email-btn">
                        Continue with Email
                      </button>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary btn-full facebook-btn">
                        Continue with Facebook
                      </button>
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
