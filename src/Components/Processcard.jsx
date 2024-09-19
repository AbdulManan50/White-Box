import React from "react";

export default function Processcard(props) {
  return (
    <div className="w-[33%] flex flex-col items-center gap-2">
      <img className="w-[60%]" src={props.img2} alt="" />
      <h1 className="font-semibold text-2xl">{props.heading3}</h1>
      <p>{props.subgeading}</p>
      <img src="/img/asset 47.svg" alt=""/>
    </div>
  );
}
