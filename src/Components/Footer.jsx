import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="md:w-[1280px] w-[95%] mx-auto pb-5 pt-10">
        <div className="flex sm:flex-row flex-col justify-between items-center">
          <div>
            <img className="w-[80%] pb-3" src="./public/img/logo.svg" alt="" />
            <p>
              The Intersection Of Innovation And Execution<br></br> Gives Rise
              To Exceptional Solutions.
            </p>
          </div>
          <div>
            <p>Let’s Get Your Project Started</p>
          </div>
        </div>
        <div className="py-2 border-dotted border-[#4B4B4B] border-b-[2px]"></div>
        <div className="flex sm:flex-row flex-col justify-between items-center py-2">
          <div>
            <p className="font-montserrat text-sm mb-3">Copyright © 2024. All Rights Reserved.</p>
          </div>
          <div className="flex gap-5 text-xl">
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaSquareInstagram />
            </span>
            <span>
              <FaLinkedin />
            </span>
            <span>
              <FaYoutube />
            </span>
            <span>
            <FaXTwitter />
            </span>
          </div>
        </div>
      </div>
    </> 
  );
}
