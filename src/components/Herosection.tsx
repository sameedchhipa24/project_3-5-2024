import React from "react";
import coin from "@/../public/assets/USD Coin_3D.png";
import rightherosection from "@/../public/assets/Frame14537.png";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
const Herosection = () => {
  return (
    <>
      {/* Coin Set */}
      <div className="max-w-screen-2xl mx-auto pt-8">
        <div className="absolute top-0">
          <Image src={coin} alt="alt" width={636} height={636} />
        </div>

        <div className=" items-center md:flex justify-evenly pl-12">
          {/* Left Side */}
          <div className="w-[614px] space-y-4">
            <h1 className="text-4xl  text-gradient leading-tight">
              POLISWAP; The Gateway to Seamless Crypto Transactions
            </h1>
            <p className="text-global">
              Enter the world of seamless crypto transactions with PoliSwap,
              where connectivity meets opportunity. Connect your wallet and
              experience the ease of PoliSwap today.
            </p>
            <div className="space-x-4 flex items-center relative z-10">
              <Link href="/Createaccount">
                <Button className="bg-gradient">Create An Account</Button>
              </Link>
              <Link href="/Login">
                <Button
                  className="px-14 py-4 text-global border-[#787878]"
                  variant={"outline"}
                >
                  Log in
                </Button>
              </Link>
            </div>
          </div>
          {/* Right Side */}
          <div>
            <Image
              src={rightherosection}
              alt="Mobile"
              width={496}
              height={496}
              className="pt-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
