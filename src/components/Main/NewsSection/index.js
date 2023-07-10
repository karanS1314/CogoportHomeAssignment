import React from "react";
import newsImg from "../../../assets/images/MainImages/news.webp";
import {
  Container,
  Wrapper,
  ColumLeft,
  ColumRight,
  Img,
  Heading,
  Subs,
  InputWrap,
  Placeholder,
  SubmitBtn,
} from "./NewsElements";
const NewsSection = () => {
  return (
    <>
      <Container id="grid">
        <Wrapper>
          <ColumLeft>
            <Img src={newsImg}></Img>
          </ColumLeft>
          <ColumRight>
            <Heading>Subscribe to our newsletter now!</Heading>
            <Subs>Don’t miss out on the latest happenings at Cogoport.</Subs>
            <InputWrap>
              <Placeholder
                type="text"
                name="Email"
                placeholder="Enter your email here"
              ></Placeholder>
              <SubmitBtn>Subscribe →</SubmitBtn>
            </InputWrap>
          </ColumRight>
        </Wrapper>
      </Container>
    </>
  );
};

export default NewsSection;
