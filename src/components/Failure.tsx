import { X } from "lucide-react";
import React from "react";

const Failure = (props:any) => {
  return (<>
    <div className="w-[400px] h-[300px] bg-[#FFF] rounded-2xl">
      <div className="relative left-[23rem] top-2 w-[400px] h-[45px]">
        <X color="grey" size={25} className="" />
      </div>
      <div className="border border-[#D9D9D9]"></div>
      <div className="space-y-5 pt-12">
        <h1 className="heading-global text-center text-3xl font-bold">
          {props.heading}
        </h1>
        <p className="px-6">{props.content}</p>
      </div>
    </div></>
    
  );
};

export default Failure;
