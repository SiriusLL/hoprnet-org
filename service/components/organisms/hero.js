import React, { forwardRef, useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import HeroInfo from "../molecules/hero-info";

const Hero = forwardRef(({}, ref) => {

  const { t } = useTranslation();

  useEffect(() => {

  }, []);

  return (
    <>
      <section ref={ref} className="section-hero">
        <HeroInfo />

        <video
            autoPlay
            loop
            muted
            playsInline
            className="background-video display-desktop"
            src="/assets/video/hero.mp4"
          ></video>
      
     
        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video display-tablet"
          src="/assets/video/hopr_Drone_Tablet-Portrait.mp4"
        ></video>
        <video
            autoPlay
            loop
            muted
            playsInline
            className="background-video display-phone"
            src="/assets/video/hopr_Drone_Mobile.mp4"
          ></video>

        <div className="container">
          <div className="text-wrapper">
            <h4>{t("homeHero:subtitle")}</h4>
            <h1>{t("homeHero:title")}</h1>
          </div>
        </div>
      </section>
    </>
  );
});

export default Hero;
