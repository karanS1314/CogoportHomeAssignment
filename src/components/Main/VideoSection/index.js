import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import playImg from "../../../assets/images/MainImages/playBtn.png";
import vidImg from "../../../assets/images/MainImages/vidImg.jpg";
import { Container, Img, Btn, PlayImg } from "./VideoElements";
const VideoSection = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Container>
        <Img src={vidImg} />
        <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpen}
          videoId="iPATxlVp5gU"
          onClose={() => setOpen(false)}
        />
        <Btn onClick={() => setOpen(true)}>
          <PlayImg src={playImg} />
        </Btn>
      </Container>
    </>
  );
};

export default VideoSection;
