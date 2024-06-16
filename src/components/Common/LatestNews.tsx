"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    imageSrc: "/images/blog-image/blog-image1.jpg",
    altText: "image",
    author: "Vivek Singh",
    date: "June 28, 2023",
    title: "Understanding the Basics of Insurance Policies",
    description: "Dive into the fundamentals of insurance policies, including the types of coverage available, how premiums are determined, and the importance of understanding policy details before making a purchase.",
    link: "/blog/details"
  },
  {
    id: 2,
    imageSrc: "/images/blog-image/blog-image2.jpg",
    altText: "image",
    author: "Rajat Jha",
    date: "July 3, 2023",
    title: "Top 5 Mistakes to Avoid When Buying Insurance",
    description: "Learn about common pitfalls to avoid when purchasing insurance, such as underestimating coverage needs, neglecting to compare quotes, and failing to disclose relevant information to insurers.",
    link: "/blog/details"
  },
  {
    id: 3,
    imageSrc: "/images/blog-image/blog-image3.jpg",
    altText: "image",
    author: "Suman Sourav",
    date: "July 10, 2023",
    title: "The Benefits of Health Insurance for Small Businesses",
    description: "Explore the advantages of offering health insurance as a small business owner, including attracting top talent, improving employee retention, and accessing tax benefits.",
    link: "/blog/details"
  }
];

const LatestNews: React.FC = () => {
  return (
    <>
      <div className="blog-area ptb-100 bg-F4F7FC">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Latest News</span>
            <h2>Our Latest Articles And News For Our Clients</h2>
          </div>

          <div className="row justify-content-center">
            {blogPosts.map((post) => (
              <div className="col-lg-4 col-md-6" key={post.id}>
                <div className="single-blog-post">
                  <div className="post-image">
                    <Link href={post.link}>
                      <Image
                        src={post.imageSrc}
                        alt={post.altText}
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
                          <Link href="/blog">{post.author}</Link>
                        </li>
                        <li>{post.date}</li>
                      </ul>
                    </div>
                    <h3>
                      <Link href={post.link}>{post.title}</Link>
                    </h3>
                    <p>{post.description}</p>

                    <Link href={post.link} className="read-more-btn">
                      Read More <i className="flaticon-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
