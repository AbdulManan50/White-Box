import React from "react";

export default function Card(props) {
  return (
    <div className={`md:w-[25%] sm:w-[50%] w-full h-[350px] flex flex-col items-center justify-center gap-5 p-10 rounded-2xl group ${props.bgColor}`}>
      <img className="w-[100px] group-hover:fill-white" src={props.img1} alt="" />
      <h1 className="text-center group-hover:text-white">{props.heading}</h1>
      <img className="group-hover:fill-white" src="/img/asset 47.svg" alt="" />
    </div>
  );
}
