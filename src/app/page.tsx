import React from "react";
import Image from "next/image";
import card1 from "../app/public/cards/card-1.jpg";
import card2 from "../app/public/cards/card-2.jpg";
import card3 from "../app/public/cards/card-3.jpg";

export default function Home(){
  return(
  <div className="bg-customGray pt-20 pb-20 gap-20 min-h-screen  flex flex-col justify-center items-center">
   <header>
    <h5 className="text-[#23A6F0] font-bold text-base tracking-[0.1px]">Welcome</h5>
   </header>
   <h1 className="text-white text-[58px] font-bold leading-[80px] tracking-[0.2px] text-center w-[542px] h-[160px] ">
     Selling on the internet like a pro
     </h1>
  <h4 className="text-white font-normal text-[20px] leading[30px] tracking[0.2px] text-center h-[60px] w-[536px]">
    We know how large objects will act, but things on a 
  small scale just do not act that way.
  </h4>
  <div className="w-[365px] h-[52px] gap[10px] flex justify-center space-x-3">
  <button className="w-[193px] h-[52px] pt-[15px] pr-10 pb-[15px] pl-10 gap[10px] text-white bg-[#23A6F0] rounded-[5px] font-bold text-[14px] leading-[22px] tracking-[0.2px] text-center">Get Quote Now</button>
  <button className="w-[162px] h-[52px] pt-[15px] pr-10 pb-[15px] pl-10 gap[10px]  border-[#23A6F0] rounded-[5px] font-bold text-[14px] leading-[22px] tracking-[0.2px] text-center border-[1px] " >Learn More</button>
  
  </div>
  <div className="flex justify-center w-[1046] h-[292px] gap-[30px] space-x-8">
  <div className="hover:scale-105 transition-transform duration-300">
  <Image
  src={card1}
  alt="Card-1"
  width={328}
  height={292}
  />
  </div>
  <div className="hover:scale-105 transition-transform duration-300">
   <Image
  src={card2}
  alt="Card-2"
  width={328}
  height={292}
  />
  </div>
  <div className="hover:scale-105 transition-transform duration-300">
   <Image
  src={card3}
  alt="Card-3"
  width={328}
  height={292}
  />
  </div>
  </div>
  </div>
  )
}