"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import Image from "next/image";

const Faq: React.FC = () => {
  return (
    <>
      <div className="faq-area ptb-100 bg-f4f7fe">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>
              Here are some common questions our clients ask. If you don't find your answer here, feel free to reach out to us directly.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-img pr-3">
                <Image
                  src="/images/faq.png"
                  alt="Image"
                  width={600}
                  height={450}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What types of insurance policies do you offer?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                        Our agency offers a wide range of insurance policies, including life insurance, health insurance, property insurance, and more. Feel free to contact us for specific details regarding the policies we offer.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How do I file a claim?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                        Filing a claim is easy with our agency. Simply contact us via phone or email, and one of our dedicated agents will guide you through the process step by step, ensuring a smooth and hassle-free experience.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What factors determine my insurance premium?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                        Several factors can affect your insurance premium, including your age, location, driving record, credit score, and the type and amount of coverage you choose. Our agents can provide personalized quotes and help you understand the factors that influence your premium.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can I make changes to my policy?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                        Yes, you can make changes to your policy at any time. Whether you need to update your coverage, add a new driver, or make any other changes, our agents are here to assist you. Simply reach out to us, and we'll make the necessary adjustments to ensure your policy meets your evolving needs.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can I lower my insurance premium?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="accordion-content">
                        There are several strategies you can use to lower your insurance premium, such as bundling multiple policies, maintaining a clean driving record, raising your deductible, and taking advantage of available discounts. Our agents can provide personalized recommendations based on your specific circumstances to help you save on your insurance costs.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
