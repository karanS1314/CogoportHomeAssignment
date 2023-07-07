import React from "react";
import i1 from "../../../assets/images/MainImages/IndImages/chemical.svg";
import i2 from "../../../assets/images/MainImages/IndImages/paracetamol.svg";
import i3 from "../../../assets/images/MainImages/IndImages/electronics.svg";
import i4 from "../../../assets/images/MainImages/IndImages/whitegoods.svg";
import i5 from "../../../assets/images/MainImages/IndImages/textiles.svg";
import i6 from "../../../assets/images/MainImages/IndImages/manufactoring.svg";
import i7 from "../../../assets/images/MainImages/IndImages/agriculture.svg";

import {
  Container,
  CardH1,
  CardWrapper,
  CardCard,
  CardH2,
  CardImg,
  ImgWrap,
} from "./IndElements";
const IndSection = () => {
  return (
    <>
      <Container id="grid">
        <CardH1>Industries Served</CardH1>
        <CardWrapper>
          <CardCard>
            <ImgWrap>
              <CardImg src={i1} />
            </ImgWrap>
            <CardH2>Chemicals</CardH2>
          </CardCard>
          <CardCard>
            <ImgWrap>
              <CardImg src={i2} />
            </ImgWrap>
            <CardH2>Pharmaceuticals</CardH2>
          </CardCard>
          <CardCard>
            <ImgWrap>
              <CardImg src={i3} />
            </ImgWrap>
            <CardH2>Electronics</CardH2>
          </CardCard>
          <CardCard>
            <ImgWrap>
              <CardImg src={i4} />
            </ImgWrap>
            <CardH2>White Goods</CardH2>
          </CardCard>
          <CardCard>
            <ImgWrap>
              <CardImg src={i5} />
            </ImgWrap>
            <CardH2>Textiles</CardH2>
          </CardCard>
          <CardCard>
            <ImgWrap>
              <CardImg src={i6} />
            </ImgWrap>
            <CardH2>Manufacturing</CardH2>
          </CardCard>
          <CardCard>
            <ImgWrap>
              <CardImg src={i7} />
            </ImgWrap>
            <CardH2>Agriculture</CardH2>
          </CardCard>
        </CardWrapper>
      </Container>
    </>
  );
};

export default IndSection;
