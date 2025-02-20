"use client";


import { useEffect, useRef } from "react";
import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";



const HeroSection= () => {

  const imageRef=useRef();
  useEffect(()=>{
    const imageElemeny=imageRef.current;
    const handleScroll=()=>{
      const scrollPosition=window.scrollY;
      const scrollThreshold=100;
      if(scrollPosition>scrollThreshold){
        imageElemeny.classList.add("scrolled");
      }else{
        imageElemeny.classList.remove("scrolled");
      }
    }
    window.addEventListener("scroll",handleScroll);

   },[]);
  return (
    <div className="pb-20 px-4" >
     <div className="container mx-auto text-center">
      <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
        Manage Your Finance <br/>With Intelligence
      </h1>
      <p className="text-x1 text-gray-600 mb-8 max-w-2xl mx-auto">
        An AI-powered financial management platform that helps you track,analyse,and optimise your spending with real-time insights.
      </p>
      <div className="flex justify-center space-x-4">
        <Link href="/dashboard">
           <Button size="lg" className="px-8">Get Started</Button>
        </Link>
        <Link href="https://www.google.com">
           <Button size="lg" variant="outline" className="px-8">Watch Demo</Button>
        </Link>
      </div>
      <div className="hero-image-wrapper">
        <div ref={imageRef}className="hero-image">
          <Image src="/image.jpg"
          width={1000}
          height={720}
          alt="Dashboard preview"
          className="rounded-lg shadow-2x1 border mx-auto"priority/>
          
        </div>
      </div>
     </div>
    </div>
  );
};

export default HeroSection