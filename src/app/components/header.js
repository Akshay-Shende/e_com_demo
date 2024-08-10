'use client'
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
 const {user} =  useSelector((state) => state.loginUserData)
 
  return (
   <nav className=" bg-slate-200 py-4 ">
    <div className="container- mx-auto flex items-center justify-between px-4">
    <div className="brand">E-Com</div>
       <ul className="flex ml-auto">
        <li className="px-4"><a href="" className="text-black hover:text-slate-400">Home</a></li>
        <li className="px-4"><a href="" className="text-black hover:text-slate-400">About Us</a></li>
        <li className="px-4"><a href="" className="text-black hover:text-slate-400">Contact Us</a></li>
       
        {
        user!=null ? (
            <>
            <li className="px-4"><a href="" className="text-black hover:text-slate-400">{` Hello ${user.firstName} `}  </a></li>
            <li className="px-4"><a href="" className="text-black hover:text-slate-400">Log Out</a></li>
            </>
        ) : (
            <>
            <li className="px-4"><a href="" className="text-black hover:text-slate-400">Login</a></li>
            <li className="px-4"><a href="" className="text-black hover:text-slate-400">Sign Up</a></li>
            </>
        )
        }  
      </ul> 
    </div>
   </nav>
  );
};

export default Header;
