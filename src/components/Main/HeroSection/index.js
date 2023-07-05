import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Section,
  Container,
  ColumnLeft,
  ColumnRight,
  Video,
  InputWrap,
  IconImg,
  Placeholder,
  SubmitBtn,
} from "./HeroElements";
import HeroVideo from "../../../assets/images/MainImages/heroVideo.webm";
import wspImg from "../../../assets/images/MainImages/wspImg.svg";
import down from "../../../assets/images/down.png";

const HeroSection = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <>
      <Section>
        <Container>
          <ColumnLeft>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Grow Faster, Go Global.
            </motion.h1>
            <motion.p
              z-index="1"
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
            >
              Strengthen your Supply Chain, and Scale your Business with
              Reliable Shipping and Cashflows.
            </motion.p>
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Talk to us now!
            </motion.h4>
            <InputWrap>
              <IconImg wsp={true} src={wspImg}></IconImg>&nbsp; +91 &nbsp;
              <IconImg src={down}></IconImg>&nbsp;
              <Placeholder
                type="number"
                name="Whatsapp Number"
                placeholder="Whatsapp Number"
              ></Placeholder>
              <SubmitBtn>Get Started</SubmitBtn>
            </InputWrap>
          </ColumnLeft>
          <ColumnRight>
            <Video autoPlay muted loop>
              <source src={HeroVideo} type="video/webm" />
            </Video>
          </ColumnRight>
        </Container>
      </Section>
    </>
  );
};

export default HeroSection;
