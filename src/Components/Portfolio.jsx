import React from "react";

export default function Portfolio(props) {
  return (
    <div className="w-[19%] bg-white p-5 rounded-lg">
      <div className={`rounded-lg p-3 ${props.bgColor}`}>
        <img  src={props.ptimg} alt="" />
      </div>
      <div className="flex justify-between items-center pt-3">
        <div>
          <h1 className="font-sans font-semibold text-xl">{props.ptheading}</h1>
          <p className="font-sans text-sm">{props.ptsubheading}</p>
        </div>
        <div>
          <img className="w-[80%]" src="/public/img/asset 49.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
