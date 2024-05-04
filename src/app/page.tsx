import GetInTouch from "@/components/GetInTouch";
import Herosection from "@/components/Herosection";
import HowItWorks from "@/components/HowItWorks";
import Slider from "@/components/Slider";
import Cardsfull from "@/components/ui/Cardsfull";
import Image from "next/image";

export default function Home() {
  return (
   <>
    <Herosection/>
    <HowItWorks/>
    <Slider/>
    <GetInTouch/>
   
   </>
  );
}
