import { Bell } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import imagelogo from "@/../public/assets/logo.png"
const UserNavbar = () => {
  return (
    <div>   <div className="flex flex-col justify-center  w-full max-w-[1254px] max-md:max-w-full">
    <div className="flex gap-5 justify-center items-center w-full max-md:flex-wrap max-md:max-w-full">
      <Image src={imagelogo} alt="alt" width={50} height={50} />
      <div className="flex gap-5 justify-between self-stretch my-auto text-base whitespace-nowrap text-neutral-500 max-md:flex-wrap max-md:max-w-full">
        <div className="font-bold text-blue-800">Home</div>
        <div>Buy</div>
        <div>Transfer</div>
        <div>Swap</div>
        <div>Deposit</div>
        <div>Withdraw</div>
      </div>
      <div className="flex gap-5 justify-between self-stretch my-auto">
       
        <Bell />

     
      </div>
    </div>
  </div></div>
  )
}

export default UserNavbar