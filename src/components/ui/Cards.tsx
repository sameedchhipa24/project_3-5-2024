import React, { Children } from "react";

const Cards = (props: any) => {
  return (
    <div>
      <div  className={`flex items-center justify-evenly px-4 mx-auto w-80 h-16 rounded-2xl text-center ${props.bgcolor}`}>
        <span className="font-extrabold text-lg">{props.serial}</span>
        <span className="">{props.text}</span>
      </div>
    </div>
  );
};

export default Cards;
