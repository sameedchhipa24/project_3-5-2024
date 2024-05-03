import React from "react";
import coin from "@/../public/assets/USD Coin_3D.png";
import rightherosection from "@/../public/assets/Frame14537.png";
import Image from "next/image";
const Herosection = () => {
  return (
    <>
      {/* Coin Set */}
      <div className="max-w-screen-xl mx-auto">
        <div className="absolute top-0">
          <Image src={coin} alt="alt" width={636} height={636} />
        </div>

        <div className=" items-center flex justify-evenly px-5">
          {/* Left Side */}
          <div className="w-[614px] space-y-4">
            <h1 className="text-4xl font-bold text-[#1438A8] leading-tight">
              POLISWAP; The Gateway to Seamless Crypto Transactions
            </h1>
            <p className="text-[#787878]">
              Enter the world of seamless crypto transactions with PoliSwap,
              where connectivity meets opportunity. Connect your wallet and
              experience the ease of PoliSwap today.
            </p>
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
