import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import SponserButton from "../components/SponserButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[30vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-40 top-28 h-[40vh] w-[20vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* <p className="uppercase tracking-widest text-sm text-center text-blue-100 max-w-120"> */}
          {/*  Initiated by SRMIST & Organized by Team LiveWires. </p> */}

          <TextGenerateEffect
            words="HackFinity 1.0"
            className="text-center text-[48px] max-md:text-[40px] lg:text-8xl"
          />

          <p className="text-center md:tracking-wider mb-[50px] text-sm md:text-lg lg:text-2xl">
            03rd & 04th December 2024 | Venue: FSH, SRMIST
          </p>

          <div className="flex">
            <a href="#about" className="mr-5" aria-label="Show my work">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>

            <a href="#about">
              <SponserButton title="Be a Sponser" icon={""} position="right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
