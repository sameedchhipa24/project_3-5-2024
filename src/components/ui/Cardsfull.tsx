import React from "react";
import Image from "next/image";
import { clsx } from 'clsx';

const Cardsfull = (props: any) => {
  return (
    // <div className="max-w-sm bg-white  rounded-lg w-[856px] h-[307px]">
    //   <div className="flex items-center pb-10 ">
    //     <Image
    //       className="w-24 h-24 mb-3 rounded-full shadow-lg"
    //       src={tooltip}
    //       alt="Bonnie image"
    //       width={100}
    //       height={100}
    //     />
    //     <div>
    //       <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
    //         Hector Colombo
    //       </h5>
    //       <span className="text-sm text-gray-500 dark:text-gray-400">
    //         Ingenieria, Argentina
    //       </span>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="w-[556px] h-[300px] bg-white rounded-2xl">
        <div className="flex justify-center items-center  space-x-4 pt-8">
        <div>
          <Image
            src={props.Imglogo}
            alt="alt"
            width={100}
            height={100}
            className="w-16 h-16 rounded-full object-cover "
          />
        </div>

        <div>
          <h2 className="font-bold">{props.titleName}</h2>
          <h5 className="text-global">{props.country}</h5>
        </div>
        </div>

        <h3 className="font-bold text-2xl text-center p-4 ">{props.heading}</h3>

        <p className="text-start px-8 text-global">{props.content}</p>
      </div>
    </>
  );
};

export default Cardsfull;
