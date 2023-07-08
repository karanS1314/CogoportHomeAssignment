import React from "react";

import {
  FooterContainer,
  FooterWrap,
  WebsiteRights,
  FooterLinksContainer,
  FooterLinksWrapper,
  H1,
  P,
  H6,
  Ul,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <Ul>
              <H1>Products</H1>
              <P>Global Trade Platform</P>
              <H6>Cross-border Logistic</H6>
              <P>Ocean: FCL</P>
              <P>Ocean: LCL</P>
              <P>International Air</P>
              <P>Customs, CFS, and Handling</P>
              <H6>Domestic Logistics</H6>
              <P>Surface: FTL, PTL, Rail</P>
              <P>Trailer & Rail Container Haulage</P>
              <H6>Trade Management Solutions</H6>
              <P>Freight Rates & Schedules</P>
              <P>Quick Premium Quotations</P>
              <P>Duties & Taxes Calculator</P>
              <P>Tracking & Visibility</P>
              <H6>CogoMaps</H6>
              <P>Shipment Planner</P>
              <P>Trade Info</P>
              <P>Global Routes</P>
              <P>Live Congestion</P>
            </Ul>
          </FooterLinksWrapper>
          <FooterLinksWrapper sec={true}>
            <Ul>
              <H6>Supply Chain Solutions</H6>
              <P>CogoAssured</P>
              <P>Fulfilment Logistics</P>
              <P>Door to Door Shipments</P>
              <P>Cargo Insurance</P>
              <H6>Financial Services</H6>
              <P>Pay Later</P>
              <P>Export Factoring</P>
              <P>CogoFx</P>
            </Ul>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <Ul>
              <H1>Partners</H1>
              <P>Global Trade Platform</P>
              <H6>Our Logistics Providers</H6>
              <P>Freight Forwarders</P>
              <P>Transporters</P>
              <P>Custom Agents</P>
              <H6>Partnership Program</H6>
              <P>Channel Partners</P>
              <P>Overseas Agents</P>
            </Ul>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <Ul>
              <H1>Tools</H1>
              <P>Rate Discovery</P>
              <P>Freight Rate Trends</P>
              <P>Tracking</P>
              <P>HS Code Finder</P>
              <P>Personal Trade Assistant</P>
            </Ul>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <Ul>
              <H1>Company</H1>
              <P>About us</P>
              <P>Careers</P>
              <P>Newsroom</P>
              <P>Leadership</P>
              <P>Login</P>
              <P>Sign Up</P>
            </Ul>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <Ul>
              <H1>Knowledge Center</H1>
              <P>Blogs</P>
              <P>News & Updates</P>
              <P>Events</P>
              <P>Reports</P>
              <P>Notifications</P>
              <H6>Resources</H6>
              <P>Port info</P>
              <P>Shipping Terms</P>
              <P>Help Center</P>
              <P>Incoterms</P>
            </Ul>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <WebsiteRights>
          Copyright © {new Date().getFullYear()} | Karan
        </WebsiteRights>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
