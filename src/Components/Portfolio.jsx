import React from "react";

export default function Portfolio(props) {
  return (
    <div className="sm:w-[19%] w-full bg-white md:p-5 p-2 rounded-lg">
      <div className={`rounded-lg p-3 ${props.bgColor}`}>
        <img  src={props.ptimg} alt="" />
      </div>
      <div className="flex justify-between items-center pt-3">
        <div>
          <h1 className="font-sans font-semibold md:text-xl text-sm">{props.ptheading}</h1>
          <p className="font-sans text-sm">{props.ptsubheading}</p>
        </div>
        <div>
          <img className="md:w-[80%] w-[50%]" src="/public/img/asset 49.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
