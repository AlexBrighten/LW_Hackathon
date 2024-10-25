import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
        <div className="container relative" ref={parallaxRef}>
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-10 lg:mb-[6rem]">
            <h1 className="text-sm sm:text-6xl md:text-3xl lg:text-4xl mb-10 sm:mb-8 md:mb-8 lg:mb8">
              SRMIST & Team LiveWires_ Presents{" "}<br />
              <span className="inline-block relative">
                <span className="h1 block mt-3">Intelithon 1.0</span>
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve decoration"
                />
              </span>
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              Join us for an exhilarating 24-hour hackathon where you can showcase your skills 
              and collaborate with like-minded innovators.
            </p>
            <Button href="/pricing" white>
              Join the waitlist!
            </Button>
          </div>

          <ScrollParallax isAbsolutelyPositioned>
            <ul className="hidden absolute -left-[0.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
              {heroIcons.map((icon, index) => (
                <li className="p-5" key={index}>
                  <img src={icon} width={24} height={25} alt={`Hero icon ${index + 1}`} />
                </li>
              ))}
            </ul>
          </ScrollParallax>

          <ScrollParallax isAbsolutelyPositioned>
            <Notification
              className="hidden absolute -right-[0.5rem] bottom-[14rem] w-[18rem] xl:flex"
              title="Code generation" 
            />
          </ScrollParallax>
        </div>

        <BackgroundCircles />
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
        <BottomLine />

    </Section>
  );
};

export default Hero;
