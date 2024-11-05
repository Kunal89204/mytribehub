import React from "react";
import Btn from "../Btn";
import globeImg from '../../../public/map.png'

const Hero = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 xl:px-24 lg:py-6 xl:py-5 md:py-4 py-2 flex justify-between sm:items-center flex-col sm:flex-row min-h-[80vh]"> {/* Increased height */}
      <div className="sm:w-[50%] xl:w-[35%] order-2 sm:order-none">
        <h1 className="font-[NeueMachina] text-2xl md:text-3xl lg:text-5xl font-[600] lg:leading-[65px]">
          MyTribeHub : “Your Companion in a New City”
        </h1>
        <p className="sm:w-[90%] text-gray-900 poppins text-[14px] py-4 sm:py-6">
          Instead of visiting several websites to get knowledge for basic expats requirements, we are creating a web-based application that will serve as a platform that provides a one-stop comprehensive solution to all these challenges together.
        </p>
        <Btn
          title={"Explore "}
          className={"bg-black text-white hover:bg-transparent hover:text-black py-3"}
        />
      </div>
      <div className="sm:w-[50%] lg:w-[50%] xl:w-[40%] flex items-center justify-center hero-right h-[400px] sm:h-[500px] lg:h-[600px]"> {/* Adjusted height */}
        
        <img src={globeImg } alt="" />
      </div>
    </div>
  );
};

export default Hero;
