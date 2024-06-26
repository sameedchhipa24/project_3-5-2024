import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import imagelogo from "@/../public/assets/logo.png";
import coin from "@/../public/assets/USD Coin_3D.png";

const Navbar = () => {
  let links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/Aboutus" },
    { name: "Contact Us", href: "/Contactus" },
  ];

  return (
    <>
      <nav className="flex justify-between max-w-screen-xl mx-auto pt-5 items-center px-4 relative z-20">
        <div>
          <Image src={imagelogo} alt="logo" width={65} height={54} />
        </div>

        <ul className="flex gap-20 text-center font-sans text-global">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="space-x-4">
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
      </nav>
    </>
  );
};

export default Navbar;
