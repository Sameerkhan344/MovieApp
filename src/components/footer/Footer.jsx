import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.css";

const Footer = () => {
  return (
    <footer className="footer bg-[#020c1b] px-0 py-[50px] text-white relative flex-col flex">
      <div className="w-full max-w-[1200px] m-auto py-0 px-[20px]">
        <div className="flex flex-col items-center justify-center">
          <ul className="menuItems list-none flex items-center justify-center  gap-[15px] mb-[20px] md:mb-[30px] md:gap-[30px]">
            <li className="menuItem cursor-pointer text-[12px] md:text-[16px] hover-text-[#da2f68] transition-all ease duration-300">
              Terms Of Use
            </li>
            <li className="menuItem cursor-pointer text-[12px] md:text-[16px] :hover-text-[#da2f68] transition-all ease duration-300 transition-all ease duration-300">
              Privacy-Policy
            </li>
            <li className="menuItem cursor-pointer text-[12px] md:text-[16px] :hover-text-[#da2f68] transition-all ease duration-300">
              About
            </li>
            <li className="menuItem cursor-pointer text-[12px] md:text-[16px] :hover-text-[#da2f68] transition-all ease duration-300">
              Blog
            </li>
            <li className="menuItem cursor-pointer text-[12px] md:text-[16px] :hover-text-[#da2f68] transition-all ease duration-300">
              FAQ
            </li>
          </ul>
          <div className="infoText text-[12px] leading-[20px] opacity-50 text-center max-w-[800px] mb-[20px] md:text-[14px] md:mb-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div className="socialIcons flex items-center justify-center gap-[10px]">
            <span className="icon w-[50px] h-[50px] rounded-[50%] bg-[#04152d] flex items-center justify-center cursor-pointer transition-all ease durations-300">
              <FaFacebookF />
            </span>
            <span className="icon w-[50px] h-[50px] rounded-[50%] bg-[#04152d] flex items-center justify-center cursor-pointer transition-all ease durations-300">
              <FaInstagram />
            </span>
            <span className="icon w-[50px] h-[50px] rounded-[50%] bg-[#04152d] flex items-center justify-center cursor-pointer transition-all ease durations-300">
              <FaTwitter />
            </span>
            <span className="icon w-[50px] h-[50px] rounded-[50%] bg-[#04152d] flex items-center justify-center cursor-pointer transition-all ease durations-300">
              <FaLinkedin />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
