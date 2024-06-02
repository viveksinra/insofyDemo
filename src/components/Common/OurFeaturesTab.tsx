"use client";

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";

const OurFeaturesTab: React.FC = () => {
  return (
    <>
      <div className="features-area ptb-100 pt-0">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Our Services</span>
            <h2>We always strive to meet our customers' insurance needs</h2>
          </div>

          <Tabs className="features-list-tab">
            {/* tabs Nav */}
            <TabList>
              <Tab>
                <div className="bg-fa7070">
                  <i className="flaticon-achievement"></i>
                  <span>Health Insurance</span>
                </div>
              </Tab>

              <Tab>
                <div className="bg-00aeff">
                  <i className="flaticon-architecture"></i>
                  <span>Life Insurance</span>
                </div>
              </Tab>

              <Tab>
                <div className="bg-c679e3">
                  <i className="flaticon-digital-marketing"></i>
                  <span>Auto Insurance</span>
                </div>
              </Tab>

              <Tab>
                <div className="bg-eb6b3d">
                  <i className="flaticon-analytics"></i>
                  <span>Home Insurance</span>
                </div>
              </Tab>

              <Tab>
                <div onClick={(e) => e.preventDefault()}>
                  <i className="flaticon-data"></i>
                  <span>Business Insurance</span>
                </div>
              </Tab>

              <Tab>
                <div className="bg-f78acb">
                  <i className="flaticon-research"></i>
                  <span>Travel Insurance</span>
                </div>
              </Tab>
            </TabList>

            {/* TabPanel 01 */}
            <TabPanel>
              <div className="features-overview">
                <div className="overview-content">
                  <div className="content">
                    <span className="sub-title">Comprehensive Coverage</span>
                    <h2>Health Insurance</h2>
                    <p>
                      Our health insurance plans ensure that you and your family are well-protected. Get access to quality healthcare services with a wide range of coverage options.
                    </p>

                    <ul className="features-list">
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Extensive Network
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Affordable Premiums
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Preventive Care
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Easy Claims Process
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> 24/7 Support
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Customizable Plans
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="overview-image">
                  <div className="image">
                    <Image
                      src="/images/features-image/feature-image1.png"
                      alt="image"
                      width={830}
                      height={750}
                    />
                  </div>
                </div>
              </div>
            </TabPanel>

            {/* TabPanel 02 */}
            <TabPanel>
              <div className="features-overview">
                <div className="overview-image">
                  <div className="image">
                    <Image
                      src="/images/features-image/feature-image2.png"
                      alt="image"
                      width={830}
                      height={750}
                    />
                  </div>
                </div>

                <div className="overview-content">
                  <div className="content">
                    <span className="sub-title">Peace of Mind</span>
                    <h2>Life Insurance</h2>
                    <p>
                      Our life insurance policies provide financial security for your loved ones. Choose from a variety of plans that best suit your needs and budget.
                    </p>

                    <ul className="features-list">
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Flexible Coverage
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Competitive Rates
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Tax Benefits
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Comprehensive Plans
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Fast Payouts
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Dedicated Advisors
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>

            {/* TabPanel 03 */}
            <TabPanel>
              <div className="features-overview">
                <div className="overview-content">
                  <div className="content">
                    <span className="sub-title">Drive Safely</span>
                    <h2>Auto Insurance</h2>
                    <p>
                      Protect your vehicle with our comprehensive auto insurance policies. Enjoy peace of mind on the road with coverage options tailored to your needs.
                    </p>

                    <ul className="features-list">
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Collision Coverage
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Liability Protection
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Roadside Assistance
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Rental Reimbursement
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Uninsured Motorist
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Comprehensive Coverage
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="overview-image">
                  <div className="image">
                    <Image
                      src="/images/features-image/feature-image2.png"
                      alt="image"
                      width={830}
                      height={750}
                    />
                  </div>
                </div>
              </div>
            </TabPanel>

            {/* TabPanel 04 */}
            <TabPanel>
              <div className="features-overview">
                <div className="overview-image">
                  <div className="image">
                    <Image
                      src="/images/features-image/feature-image4.png"
                      alt="image"
                      width={830}
                      height={750}
                    />
                  </div>
                </div>

                <div className="overview-content">
                  <div className="content">
                    <span className="sub-title">Protect Your Home</span>
                    <h2>Home Insurance</h2>
                    <p>
                      Secure your home and possessions with our comprehensive home insurance policies. We offer coverage for damages, theft, and natural disasters.
                    </p>

                    <ul className="features-list">
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Property Coverage
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Liability Protection
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Additional Living Expenses
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Theft Coverage
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Disaster Coverage
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Customizable Plans
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>

            {/* TabPanel 05 */}
            <TabPanel>
              <div className="features-overview">
                <div className="overview-content">
                  <div className="content">
                    <span className="sub-title">Secure Your Business</span>
                    <h2>Business Insurance</h2>
                    <p>
                      Protect your business with our comprehensive business insurance policies. We offer coverage for property, liability, and employee-related risks.
                    </p>

                    <ul className="features-list">
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Property Coverage
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Liability Protection
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Employee Benefits
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Business Interruption
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Professional Liability
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Customized Coverage
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="overview-image">
                  <div className="image">
                    <Image
                      src="/images/features-image/feature-image5.png"
                      alt="image"
                      width={830}
                      height={750}
                    />
                  </div>
                </div>
              </div>
            </TabPanel>

            {/* TabPanel 06*/}
            <TabPanel>
              <div className="features-overview">
                <div className="overview-image">
                  <div className="image">
                    <Image
                      src="/images/features-image/feature-image6.png"
                      alt="image"
                      width={830}
                      height={750}
                    />
                  </div>
                </div>

                <div className="overview-content">
                  <div className="content">
                    <span className="sub-title">Travel Safely</span>
                    <h2>Travel Insurance</h2>
                    <p>
                      Enjoy your travels with peace of mind. Our travel insurance plans offer comprehensive coverage for medical emergencies, trip cancellations, lost luggage, and more.
                    </p>

                    <ul className="features-list">
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Medical Coverage
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Trip Cancellation
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Lost Luggage
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> 24/7 Assistance
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Worldwide Coverage
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="flaticon-tick"></i> Customizable Plans
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>

        {/* Animation Image */}
        <div className="shape-img7">
          <Image
            src="/images/shape/shape7.png"
            alt="image"
            width={100}
            height={93}
          />
        </div>
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
        <div className="shape-img4">
          <Image
            src="/images/shape/shape4.png"
            alt="image"
            width={15}
            height={15}
          />
        </div>
      </div>
    </>
  );
};

export default OurFeaturesTab;
