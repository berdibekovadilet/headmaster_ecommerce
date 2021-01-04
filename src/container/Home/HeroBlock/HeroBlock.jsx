import React from "react";
import styled from "styled-components";

import HeroSlider, {
  Slide,
  SideNav,
  ButtonsNav,
  OverlayContainer,
} from "hero-slider";


import banner1 from "./images/banner1.jpg";
import banner2 from "./images/banner2.jpg";
import banner3 from "./images/banner3.jpg";
import banner4 from "./images/banner4.jpg";

const StyledOverlayContainer = styled(OverlayContainer)`
  &&& {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.33);
    text-align: center;
    h2,
    h3 {
      margin: 0 36px;
    }
  }
`;

const HeroBlock = () => {
  return (
    <HeroSlider
      slidingAnimation="fade"
      orientation="horizontal"
      initialSlide={1}
      style={{
        backgroundColor: "#000",
        color: "#FFF",
      }}
      settings={{
        slidingDuration: 400,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 8000,
        height: "90vmin",
      }}
    >
      <StyledOverlayContainer>
        {/* <h2>Blend Mode Slider</h2>
        <h3>
          Slides&apos; and masks&apos; background blend mode set to luminosity
        </h3>
        <h3>Slides&apos; shouldRenderMask prop set to true</h3> */}
      </StyledOverlayContainer>

      <Slide
        shouldRenderMask
        navDescription="Rocky Waterfall"
        background={{
          backgroundColor: "",
          backgroundBlendMode: "luminosity",
          maskBackgroundBlendMode: "luminosity",
          backgroundImage: banner1,
        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Palau - Pacific Ocean"
        background={{
          backgroundColor: "",
          backgroundBlendMode: "luminosity",
          maskBackgroundBlendMode: "luminosity",
          backgroundImage: banner2,
        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Quepos - Costa Rica"
        background={{
          backgroundColor: "",
          backgroundBlendMode: "luminosity",
          maskBackgroundBlendMode: "luminosity",
          backgroundImage: banner3,
        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Mountain View"
        background={{
          backgroundColor: "",
          backgroundBlendMode: "luminosity",
          maskBackgroundBlendMode: "luminosity",
          backgroundImage: banner4,
        }}
      />

      <ButtonsNav />
      <SideNav
        position={{
          top: "0",
          right: "0",
        }}
      />
    </HeroSlider>
  );
};

export default HeroBlock;
