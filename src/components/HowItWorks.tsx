import React from "react";
import Cards from "./ui/Cards";

const HowItWorks = () => {
  return (
    <div className="max-w-screen-xl mx-auto space-y-5">
      <h1 className="text-gradient">How it Works</h1>
      <div className="flex justify-around">
        <Cards serial="01" text="Connect Your Wallet" />
        <Cards serial="02" text="Check Your Balance" />
        <Cards serial="03" text="Performed Transactions." />
      </div>
    </div>
  );
};

export default HowItWorks;
