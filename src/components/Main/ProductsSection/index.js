import React from "react";
import i1 from "../../../assets/images/MainImages/ProductsImages/i1.svg";
import i2 from "../../../assets/images/MainImages/ProductsImages/i2.svg";
import i3 from "../../../assets/images/MainImages/ProductsImages/i3.svg";
import i4 from "../../../assets/images/MainImages/ProductsImages/i4.svg";
import i5 from "../../../assets/images/MainImages/ProductsImages/i5.svg";
import i6 from "../../../assets/images/MainImages/ProductsImages/i6.svg";
import i7 from "../../../assets/images/MainImages/ProductsImages/i7.svg";
import i8 from "../../../assets/images/MainImages/ProductsImages/i8.svg";
import i9 from "../../../assets/images/MainImages/ProductsImages/i9.svg";
import i10 from "../../../assets/images/MainImages/ProductsImages/i10.svg";
import i11 from "../../../assets/images/MainImages/ProductsImages/i11.svg";
import i12 from "../../../assets/images/MainImages/ProductsImages/i12.svg";
import i13 from "../../../assets/images/MainImages/ProductsImages/i13.svg";
import i14 from "../../../assets/images/MainImages/ProductsImages/i14.svg";
import i15 from "../../../assets/images/MainImages/ProductsImages/i15.svg";
import i16 from "../../../assets/images/MainImages/ProductsImages/i16.svg";
import {
  Container,
  H1Wrap,
  H1,
  Wrapper,
  Card,
  CardH2,
  CardH3,
  CardImg,
  ImgWrap,
  TextWrapper,
  CardWrapper,
} from "./ProductsElements";
const ProductsSection = () => {
  return (
    <>
      <Container id="grid">
        <H1Wrap>
          <H1>Our Products</H1>
        </H1Wrap>
        <Wrapper>
          <TextWrapper>End to End Cross Border Logistics</TextWrapper>
          <CardWrapper>
            <Card>
              <ImgWrap>
                <CardImg src={i1} />
              </ImgWrap>
              <CardH2>Ocean: FCL</CardH2>
              <CardH3>Find out More →</CardH3>
            </Card>
            <Card>
              <ImgWrap>
                <CardImg src={i2} />
              </ImgWrap>
              <CardH2>Ocean: LCL</CardH2>
              <CardH3>Find out More →</CardH3>
            </Card>
            <Card>
              <ImgWrap>
                <CardImg src={i3} />
              </ImgWrap>
              <CardH2>International Air</CardH2>
              <CardH3>Find out More →</CardH3>
            </Card>
            <Card>
              <ImgWrap>
                <CardImg src={i4} />
              </ImgWrap>
              <CardH2>Customs, CFS, & Handling</CardH2>
              <CardH3>Find out More →</CardH3>
            </Card>
          </CardWrapper>
        </Wrapper>
      </Container>
      <Container id="grid">
        <Wrapper>
          <TextWrapper>Domestic Logistics</TextWrapper>
          <CardWrapper>
            <Card>
              <ImgWrap>
                <CardImg src={i5} />
              </ImgWrap>
              <CardH2>FTL, PTL</CardH2>
              <CardH3>Find out More →</CardH3>
            </Card>
            <Card>
              <ImgWrap>
                <CardImg src={i6} />
              </ImgWrap>
              <CardH2>Trailer & Rail Container Haulage</CardH2>
              <CardH3>Find out More →</CardH3>
            </Card>
          </CardWrapper>
        </Wrapper>
      </Container>
      <Container id="grid">
        <Wrapper>
          <TextWrapper>Supply Chain Solutions</TextWrapper>
          <CardWrapper>
            <Card>
              <ImgWrap>
                <CardImg src={i7} />
              </ImgWrap>
              <CardH2>CogoAssured</CardH2>
              <CardH3>Find out More →</CardH3>
            </Card>
            <Card>
              <ImgWrap>
                <CardImg src={i8} />
              </ImgWrap>
              <CardH2>Domestic Fulfiment</CardH2>
              <CardH3>Find out More →</CardH3>
            </Card>
            <Card>
              <ImgWrap>
                <CardImg src={i9} />
              </ImgWrap>
              <CardH2>Door to Door Shipments</CardH2>
              <CardH3>Find out More →</CardH3>
            </Card>
            <Card>
              <ImgWrap>
                <CardImg src={i10} />
              </ImgWrap>
              <CardH2>Cogo Insurance</CardH2>
              <CardH3>Find out More →</CardH3>
            </Card>
          </CardWrapper>
        </Wrapper>
      </Container>
      <Container id="grid">
        <Wrapper>
          <TextWrapper>Financial Services</TextWrapper>
          <CardWrapper>
            <Card>
              <ImgWrap>
                <CardImg src={i11} />
              </ImgWrap>
              <CardH2>Pay Later</CardH2>
              <CardH3>Find out More →</CardH3>
            </Card>
            <Card>
              <ImgWrap>
                <CardImg src={i12} />
              </ImgWrap>
              <CardH2>Export Factoring</CardH2>
              <CardH3>Find out More →</CardH3>
            </Card>
          </CardWrapper>
        </Wrapper>
      </Container>
      <Container id="grid">
        <Wrapper>
          <TextWrapper>Trade Management Solutions</TextWrapper>
          <CardWrapper>
            <Card>
              <ImgWrap>
                <CardImg src={i13} />
              </ImgWrap>
              <CardH2>Freight Rates & Schedules</CardH2>
              <CardH3>Find out More →</CardH3>
            </Card>
            <Card>
              <ImgWrap>
                <CardImg src={i14} />
              </ImgWrap>
              <CardH2>Quick Premium Quotations</CardH2>
              <CardH3>Find out More →</CardH3>
            </Card>
            <Card>
              <ImgWrap>
                <CardImg src={i15} />
              </ImgWrap>
              <CardH2>Duties & Taxes Calculator</CardH2>
              <CardH3>Find out More →</CardH3>
            </Card>
            <Card>
              <ImgWrap>
                <CardImg src={i16} />
              </ImgWrap>
              <CardH2>Tracking & Visibility</CardH2>
              <CardH3>Find out More →</CardH3>
            </Card>
          </CardWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default ProductsSection;
