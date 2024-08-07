import React from "react";
import Link from "next/link";
const Header = () => {
  return (
   <nav className=" bg-slate-200 py-4 ">
    <div className="container- mx-auto flex items-center justify-between px-4">
    <div className="brand">E-Com</div>
       <ul className="flex ml-auto">
        <li className="px-4"><a href="" className="text-black hover:text-slate-400">Home</a></li>
        <li className="px-4"><a href="" className="text-black hover:text-slate-400">About Us</a></li>
        <li className="px-4"><a href="" className="text-black hover:text-slate-400">Contact Us</a></li>
        <li className="px-4"><a href="" className="text-black hover:text-slate-400">Log In</a></li>
      </ul> 
    </div>
   </nav>
  );
};

export default Header;
