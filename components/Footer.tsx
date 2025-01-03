import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="z-[-1] w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Join Hackfinity to make
          <span className="text-purple">quality education</span> for all.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Stay updated by joining the conversation on Discord, WhatsApp, and
          Instagram.
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdhmV0XuK2jxgJNUtnXb7dJxz9vXU7FqwVzLlFBMuIVhGlDxw/viewform">
          <MagicButton
            title="Register Now"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        <div className="mt-[70px]">
          <h1 className="heading lg:max-w-[45vw]">Contact</h1>
          <p className="text-white-200 md:mt-10 my-2 text-center font-extrabold">
            For any queries, feel free to reach out to us.
          </p>
          <p className="text-white-200 mt-5 text-center">Alex Job - 7448573606</p>
          <p className="text-white-200 text-center">Mohammed Vaseem - 8608252352</p>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          © 2024 Hackfinity. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

//<div className="flex items-center md:gap-3 gap-6">
//{socialMedia.map((info) => (
//  <div
//  key={info.id}
//className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
//>
//{/* <img src={info.img} alt="icons" width={20} height={20} /> */}
//</div>
//))}
//</div>;
