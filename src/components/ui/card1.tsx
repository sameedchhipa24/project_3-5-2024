import React from "react";
import Image from "next/image";
import { ArrowBigDownDashIcon, ArrowRight } from "lucide-react";

const Card = (props: any , className : any) => {
  return (
    <>
      <div>
        <div className="w-[457px] h-[260px]">
          <Image
            src={props.image}
            alt=""
            width={457}
            height={260}
            className="rounded-xl"
          />

          <div className="relative bottom-40 left-12 z-10 space-y-5">
            <h3 className="text-4xl font-bold text-gray-800 dark:text-white ">
              {props.title}
            </h3>
            <div className="flex  items-center space-x-2">
              <ArrowRight className="text-gray-500" size={20}/>
              <p className=" text-md text-gray-500 dark:text-gray-400 font-light ">
                {props.description}
              </p>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};
export default Card;
