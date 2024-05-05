import React from "react";
import Cards from "./ui/Cards";

const HowItWorks = () => {
  return (
    <div className="max-w-screen-xl mx-auto space-y-4">
      <h1 className="text-gradient tracking-wide">How it Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-10">
        <Cards serial="01" text="Connect Your Wallet" bgcolor="bg-[#FFF9B7]" />
        <Cards serial="02" text="Check Your Balance" bgcolor="bg-[#E3F6CF]" />

        <Cards
          serial="03"
          text="Performed Transactions."
          bgcolor="bg-[#E6CFFA]"
        />
      </div>
    </div>
  );
};

export default HowItWorks;
