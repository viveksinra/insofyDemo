"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const LatestNews: React.FC = () => {
  return (
    <>
      <div className="blog-area ptb-100 bg-F4F7FC" >
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Latest News</span>
            <h2>Our Latest Articles And News For Our Clients</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog-image/blog-image1.jpg"
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <ul>
                      <li>
                        By:
                        <Link href="/blog">Sarah Taylor</Link>
                      </li>
                      <li>June 28, 2023</li>
                    </ul>
                  </div>
                  <h3>
                    <Link href="/blog/details">
                      Understanding the Basics of Insurance Policies
                    </Link>
                  </h3>
                  <p>
                    Dive into the fundamentals of insurance policies, including the types of coverage available, how premiums are determined, and the importance of understanding policy details before making a purchase.
                  </p>

                  <Link href="/blog/details" className="read-more-btn">
                    Read More <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog-image/blog-image2.jpg"
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <ul>
                      <li>
                        By:
                        <Link href="/blog">James Anderson</Link>
                      </li>
                      <li>July 3, 2023</li>
                    </ul>
                  </div>
                  <h3>
                    <Link href="/blog/details">
                      Top 5 Mistakes to Avoid When Buying Insurance
                    </Link>
                  </h3>
                  <p>
                    Learn about common pitfalls to avoid when purchasing insurance, such as underestimating coverage needs, neglecting to compare quotes, and failing to disclose relevant information to insurers.
                  </p>

                  <Link href="/blog/details" className="read-more-btn">
                    Read More <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog-image/blog-image3.jpg"
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <ul>
                      <li>
                        By:
                        <Link href="/blog">Steven Smith</Link>
                      </li>
                      <li>July 10, 2023</li>
                    </ul>
                  </div>
                  <h3>
                    <Link href="/blog/details">
                      The Benefits of Health Insurance for Small Businesses
                    </Link>
                  </h3>
                  <p>
                    Explore the advantages of offering health insurance as a small business owner, including attracting top talent, improving employee retention, and accessing tax benefits.
                  </p>

                  <Link href="/blog/details" className="read-more-btn">
                    Read More <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Shape Image */}
        <div className="shape-img2">
          <Image
            src="/images/shape/shape2.svg"
            alt="image"
            width={20}
            height={20}
          />
        </div>
        <div className="shape-img3">
          <Image
            src="/images/shape/shape3.svg"
            alt="image"
            width={22}
            height={22}
          />
        </div>
      </div>
    </>
  );
};

export default LatestNews;
