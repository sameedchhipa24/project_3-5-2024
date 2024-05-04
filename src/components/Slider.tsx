import React from "react";
import Comma from "@/../public/assets/Comma.png";
import Image from "next/image";
import Cardsfull from "./ui/Cardsfull";
import tooltip from "@/../public/assets/men.png";

const Slider = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto w-[1350px] h-[600px] bg-gradient rounded-3xl mt-10 ">
        <div className="flex justify-center space-x-4 pt-12 ">
          <p className="text-4xl text-white text-start">
            What Other Users are saying about{" "}
          </p>
          <p className="text-4xl text-white font-bold">PoliSwap</p>
        </div>
        <div className="flex justify-evenly p-10 space-x-2">
          <Cardsfull
            Imglogo={tooltip}
            titleName="Hector Colombo"
            country="Ingenieria, Argentina"
            heading="At home or on the go"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ."
          />
          <Cardsfull
            Imglogo={tooltip}
            titleName="Alexandar Merth"
            country="Ingenieria, Argentina"
            heading="All your crypto in one place"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ."
          />
        </div>
      </div>
      <Image src={Comma} alt="alt" width={100} height={100} className="flex" />
    </>
  );
};

export default Slider;
