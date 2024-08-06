"use client"
import React from 'react'
import { Hourglass } from 'react-loader-spinner';
export default function Loading(){
  console.log("loading page in login folder");
  
  return (
   <div className="flex justify-center items-center h-screen">
    <Hourglass
    visible={true}
    height="100"
    width="100"
    ariaLabel="hourglass-loading"
    wrapperStyle={{}}
    wrapperClass=""
    colors={['#306cce', '#72a1ed']}
    />
    </div>
  )
}

