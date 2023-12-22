import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div id="main-wrapper" class="page-wrapper">
      <div class="dc-signin theme-two">
        <div class="signin-wrapper">
          <div class="intro-box">
            <div class="intro-content style-dark">
              <Image
                src="/images/shikshapluslogo.png"
                class="logo"
                alt="Shiksha Plus"
                width={100}
                height={100}
              />
              <div class="heading-wrapper">
                <h2 class="h1">
                  Welcome to <span>Shiksha Plus</span>
                </h2>
              </div>
              <div class="text-wrapper">
                <p>
                  An easy to use, affordable solution for any educational
                  organization.
                </p>
              </div>
              <div class="btn-wrapper">
                <Link class="btn btn-primary btn-light" href="/">
                  Discover More
                </Link>
              </div>
            </div>
            <div class="st-tab-btn">
              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    data-toggle="tab"
                    href="#SignIn"
                    role="tab"
                  >
                    Login
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link"
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
          <div class="form-box">
            <div class="st-tab-content">
              <div class="tab-content">
                <div class="tab-pane active" id="SignIn" role="tabpanel">
                  <form>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Email/Username"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Enter Password"
                      />
                    </div>
                    <div class="form-group text-center">
                      <Link href="/" class="btn link-btn forgot-link">
                        Forgot Password?
                      </Link>
                    </div>
                    <div class="form-group">
                      <button class="btn btn-primary btn-full">Sign In</button>
                    </div>
                    <div class="or">
                      <span>or</span>
                    </div>

                    <div class="form-group">
                      <button class="btn btn-primary btn-full email-btn">
                        Continue with Email
                      </button>
                    </div>
                    <div class="form-group">
                      <button class="btn btn-primary btn-full facebook-btn">
                        Continue with Facebook
                      </button>
                    </div>
                  </form>
                </div>
                <div class="tab-pane" id="SignUp" role="tabpanel">
                  <form>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Full Name"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Enter Email Address"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Enter Password"
                      />
                    </div>
                    <div class="form-group text-center">
                      <label>
                        <input type="checkbox" required="required" /> I accept
                        the policy and terms
                      </label>
                    </div>
                    <div class="form-group">
                      <button class="btn btn-primary btn-full">Sign Up</button>
                    </div>
                    <div class="or">
                      <span>or</span>
                    </div>

                    <div class="form-group">
                      <button class="btn btn-primary btn-full email-btn">
                        Continue with Email
                      </button>
                    </div>
                    <div class="form-group">
                      <button class="btn btn-primary btn-full facebook-btn">
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
