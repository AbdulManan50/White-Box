import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { FaUpwork } from "react-icons/fa6";

export default function Teamcard() {
  return (
    <>
      <div className="md:flex">
        <div className="md:w-[50%] w-full flex">
          <div className="w-[50%]">
            <img className="h-full" src="./public/img/asset 19.png" alt="" />
          </div>
          <div className="bg-black w-[50%] flex flex-col justify-between">
            <div className="flex text-white flex-col gap-y-5 text-[20px] items-end px-5 py-5">
              <span>
                <FaGithub />
              </span>
              <span>
                <FaLinkedin />
              </span>
              <span>
                <TbBrandFiverr />
              </span>
              <span>
                <FaUpwork />
              </span>
            </div>
            <div className="px-10 pb-10">
              <p className="text-[#006B6C]">CEO</p>
              <h1 className="text-white font-semibold text-xl">
                Muhammad Tallah
              </h1>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] w-full flex md:flex-row flex-row-reverse">
          <div className="w-[50%]">
            <img className="h-full" src="./public/img/asset 24.png" alt="" />
          </div>
          <div className="bg-black w-[50%] flex flex-col justify-between">
            <div className="flex text-white flex-col gap-y-5 text-[20px] items-end px-5 py-5">
              <span>
                <FaGithub />
              </span>
              <span>
                <FaLinkedin />
              </span>
              <span>
                <TbBrandFiverr />
              </span>
              <span>
                <FaUpwork />
              </span>
            </div>
            <div className="px-10 pb-10">
              <p className="text-[#A9AB23]">CTO</p>
              <h1 className="text-white font-semibold text-xl">
              Asher Muneer
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex">
        <div className="md:w-[50%] w-full flex md:flex-row flex-row-reverse">
          <div className="bg-black w-[50%] flex flex-col justify-between">
            <div className="flex text-white flex-col gap-y-5 text-[20px] items-end px-5 py-5">
              <span>
                <FaGithub />
              </span>
              <span>
                <FaLinkedin />
              </span>
              <span>
                <TbBrandFiverr />
              </span>
              <span>
                <FaUpwork />
              </span>
            </div>
            <div className="px-10 pb-10">
              <p className="text-[#0470AC]">COO</p>
              <h1 className="text-white font-semibold text-xl">
                Muhammad Tallah
              </h1>
            </div>
          </div>
          <div className="w-[50%]">
            <img className="h-full" src="./public/img/asset 25.png" alt="" />
          </div>
        </div>
        <div className="md:w-[50%] w-full flex">
          <div className="bg-black w-[50%] flex flex-col justify-between">
            <div className="flex text-white flex-col gap-y-5 text-[20px] items-end px-5 py-5">
              <span>
                <FaGithub />
              </span>
              <span>
                <FaLinkedin />
              </span>
              <span>
                <TbBrandFiverr />
              </span>
              <span>
                <FaUpwork />
              </span>
            </div>
            <div className="px-10 pb-10">
              <p className="text-[#7987FF]">CMO</p>
              <h1 className="text-white font-semibold text-xl">
              Zirva Zahid
              </h1>
            </div>
          </div>
          <div className="w-[50%]">
            <img className="h-full" src="./public/img/asset 27.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
