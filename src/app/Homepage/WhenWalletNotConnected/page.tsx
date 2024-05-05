import * as React from "react";
import imagelogo from "@/../public/assets/logo.png";
import Image from "next/image";
import { Bell } from "lucide-react";
import Card from "@/components/ui/card1";
import Rectangle from "@/../public/assets/Block2.png";
import Rectangle1 from "@/../public/assets/Block3.png";
import Rectangle2 from "@/../public/assets/Group 1000001978.png";
import Cards from "@/components/ui/Cards";

let page = () => {
  return (
    <div className="flex flex-col items-center justify-between max-w-screen-xl mx-auto">
      <div className="flex flex-col justify-center mt-16 max-w-full w-[975px] max-md:mt-10">
        <div className="flex gap-5 justify-between px-16 py-20 w-full rounded-3xl bg-lime-100 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col justify-center my-auto font-bold">
            <div className="text-3xl text-neutral-800">
              Your Current Balance
            </div>
            <div className="flex gap-5 mt-5 text-2xl text-neutral-500">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/187c2878c8ce743e64a72c0e2df34102eb532230a738ccdb0bef360b9eb2745b?apiKey=cc16bd8147714e27b381b1abd6cc7e96&"
                className="shrink-0 my-auto w-6 aspect-square"
              />
              <div className="justify-center">$200.00 USDC</div>
            </div>
          </div>
          <div className="flex gap-5 justify-between text-sm font-medium text-white whitespace-nowrap">
            <div className="shrink-0 w-0.5 rounded-2xl bg-neutral-500 bg-opacity-50 h-[110px] mr-12" />
            <div className="flex flex-col">
              <div className="flex flex-col justify-center">
                <div className="justify-center px-8 py-3 rounded-lg shadow-sm bg-[linear-gradient(94deg,#1438A8_9.44%,#567FFF_100.62%)] max-md:px-5">
                  Deposit
                </div>
              </div>
              <div className="flex flex-col justify-center mt-4">
                <div className="justify-center px-8 py-3 rounded-lg shadow-sm bg-[linear-gradient(94deg,#1438A8_9.44%,#567FFF_100.62%)] max-md:px-5">
                  Withdraw
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 mt-12 gap-x-16 gap-y-12">
       
          <Card
            title="Buy USDC"
            description="Load your wallet with more USDC"
            image={Rectangle}
          />
       
      
          <Card
            title="Transfer USDC"
            description="Transfer USDC to anyone, anytime"
            image={Rectangle1}
          />
       
       <div className="mb-8 col-span-2 justify-items-center">
        <Card
          title="Swap USDC"
          description="Load your wallet with more USDC"
          image={Rectangle2}
        />
       </div>
       

        
      </div>
    </div>
  );
};

export default page;
