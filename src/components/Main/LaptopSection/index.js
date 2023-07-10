import React from "react";
import laptopImg2 from "../../../assets/images/MainImages/LaptopImages/laptopImg2.png";
import laptopImg from "../../../assets/images/MainImages/LaptopImages/laptop.webp";
import i1 from "../../../assets/images/MainImages/LaptopImages/i1.svg";
import i2 from "../../../assets/images/MainImages/LaptopImages/i2.svg";
import i3 from "../../../assets/images/MainImages/LaptopImages/i3.svg";
import i4 from "../../../assets/images/MainImages/LaptopImages/i4.svg";

import {
  Container,
  Wrapper,
  Img,
  Col1,
  Col2,
  Col3,
  Card,
  CardH2,
  CardH1,
  CardImg,
  UL,
  LI,
} from "./LaptopElements";
const LaptopSection = () => {
  return (
    <>
      <Container id="grid">
        <Wrapper>
          <Col1>
            <Card first={true}>
              <CardH1>Stage 1:</CardH1>
              <CardH2>
                <CardImg src={i1}></CardImg> Discover
              </CardH2>
              <UL>
                <LI>Spot and Contract Rates for Logistics</LI>
                <LI>
                  Service details, Trade Compliance/ Regulatory Requirements
                </LI>
                <LI>
                  Knowledge and Insights on Trade, Logistics, Finance, Supply
                  Chains
                </LI>
              </UL>
            </Card>
            <Card>
              <CardH1>Stage 2:</CardH1>
              <CardH2>
                <CardImg src={i2}></CardImg> Plan & Book
              </CardH2>
              <UL>
                <LI>
                  Route, Service Schedules, Inventory, and Cashflow planning
                </LI>
                <LI>
                  Book with upfront visibility of service terms and inclusions
                </LI>
              </UL>
            </Card>
          </Col1>
          <Col2>
            <Img src={laptopImg2} arrows={true}></Img>
            <Img src={laptopImg}></Img>
          </Col2>
          <Col3>
            <Card first={true}>
              <CardH1>Stage 3:</CardH1>
              <CardH2>
                <CardImg src={i3}></CardImg> Execute
              </CardH2>
              <UL>
                <LI>Ocean and Air Cargo Tracking</LI>
                <LI>Documentation and Filings, Handled</LI>
                <LI>
                  Multi-modal: Smooth coordination and handovers between various
                  service providers and stakeholders
                </LI>
              </UL>
            </Card>
            <Card>
              <CardH1>Stage 4:</CardH1>
              <CardH2>
                <CardImg src={i4}></CardImg> Finance
              </CardH2>
              <UL>
                <LI>Deferred payment on Logistics with PayLater</LI>
                <LI>Trade Finance for your Cargo with Export Factoring</LI>
              </UL>
            </Card>
          </Col3>
        </Wrapper>
      </Container>
    </>
  );
};

export default LaptopSection;
