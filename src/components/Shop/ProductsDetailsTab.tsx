"use client";

import React from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const ProductsDetailsTab: React.FC = () => {
  return (
    <>
      <Tabs className="products-details-tab">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <TabList>
              <Tab>
                <span>
                  <div className="dot"></div> Description
                </span>
              </Tab>
              <Tab>
                <span>
                  <div className="dot"></div> Additional information
                </span>
              </Tab>
              <Tab>
                <span>
                  <div className="dot"></div> Reviews
                </span>
              </Tab>
            </TabList>
          </div>

          <div className="col-lg-12 col-md-12">
            <TabPanel>
              <div className="products-details-tab-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est.
                </p>

                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem.
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="products-details-tab-content">
                <ul className="additional-information">
                  <li>
                    <span>Brand:</span> Insofy
                  </li>
                  <li>
                    <span>Color:</span> Brown
                  </li>
                  <li>
                    <span>Size:</span> Large, Medium
                  </li>
                  <li>
                    <span>Weight:</span> 27 kg
                  </li>
                  <li>
                    <span>Dimensions:</span> 16 x 22 x 123 cm
                  </li>
                </ul>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="products-details-tab-content">
                <div className="product-review-form">
                  <h3>Customer Reviews</h3>

                  <div className="review-title">
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                    <p>Based on 3 reviews</p>

                    <Link href="#" className="default-btn">
                      Write a Review <span></span>
                    </Link>
                  </div>

                  <div className="review-comments">
                    <div className="review-item">
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                      <h3>Good</h3>
                      <span>
                        <strong>Admin</strong> on <strong>Sep 21, 2023</strong>
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>

                      <Link href="#" className="review-report-link">
                        Report as Inappropriate
                      </Link>
                    </div>

                    <div className="review-item">
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                      <h3>Good</h3>
                      <span>
                        <strong>Admin</strong> on <strong>Sep 21, 2023</strong>
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>

                      <Link href="#" className="review-report-link">
                        Report as Inappropriate
                      </Link>
                    </div>

                    <div className="review-item">
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                      <h3>Good</h3>
                      <span>
                        <strong>Admin</strong> on <strong>Sep 21, 2023</strong>
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>

                      <Link href="#" className="review-report-link">
                        Report as Inappropriate
                      </Link>
                    </div>
                  </div>

                  <div className="review-form">
                    <h3>Write a Review</h3>

                    <form>
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Enter your name"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Enter your mobile number"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              id="review-title"
                              name="review-title"
                              placeholder="Enter your review a title"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <textarea
                              name="review-body"
                              id="review-body"
                              cols={30}
                              rows={7}
                              placeholder="Write your comments here"
                              className="form-control"
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <button type="submit" className="default-btn">
                            Submit Review <span></span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default ProductsDetailsTab;
