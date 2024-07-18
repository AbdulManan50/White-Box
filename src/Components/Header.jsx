import React from "react";
export default function Header() {
  return (
    <>
      <div className="bg-[#F6F6F6]">
        <div className="w-[95%] mx-auto flex justify-between py-3">
          <div>
            <img src="./public/img/logo.svg" alt="" />
          </div>
          <div>
            <ul className="flex gap-10 text-[#9ca3af]  text-lg font-medium font-sans ">
              <li>Projects</li>
              <li>Services</li>
              <li>Staff Augmentation</li>
              <li>Company</li>
              <li>Solutions</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <button className="border-[2px] border-[#b00013] bg-white hover:bg-[#4B4B4B] hover:text-white px-8 py-[6px] rounded-full font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}