import React from "react";
import Link from "next/link";

export default function Navbar(){
    return(
        <div className="font-custom bg-customGray text-white ">
            <nav className="w-[1322px] h-[91px] l-[59px] flex justify-between items-center ">
            <h3 className="font-custom text-white pt-[17px] pl-[136px] text-xl font-bold leading-8 tracking-wider text-left">BrandName</h3>
            
            
            <Link href="./Home" className="pt-[16px] gap-[21px]  text-sm font-bold leading-6 tracking-wide text-center hover:text-[#23A6F0]">Home</Link>
            
            <Link href="./Product" className="pt-[16px] gap-[21px] text-sm font-bold leading-6 tracking-wide text-center hover:text-[#23A6F0] ">Product</Link>
           
            <Link href="./Pricing" className="pt-[16px] gap-[21px] text-sm font-bold leading-6 tracking-wide text-center hover:text-[#23A6F0]">Pricing</Link>
            
            <Link href="./Contact" className="pt-[16px] gap-[21px] text-sm font-bold leading-6 tracking-wide text-center hover:text-[#23A6F0]">Contact</Link>
            
            <button className=" pl-[364px] text-sm font-bold leading-6 [22px] tracking-wide text-center hover:text-[#23A6F0]">Login</button>
            <button className=" bg-[#23A6F0] w-[110px] h-[52px] p-4 py-[15px] gap-[15px]  rounded-tl-[5px] ">JOIN US</button>
            </nav>
            
        </div>
    )
}