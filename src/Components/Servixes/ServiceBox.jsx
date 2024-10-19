import React from "react";
import Tags from "../Tags";
import serviceData from "./serviceData";

const ServiceBox = () => {
  return (
    <>
      {serviceData.map((data, index) => (
        <div
          key={index}
          className={`border-2 border-black rounded-3xl py-8 h-[230px] px-6 flex justify-between ${
            index === 1 || index === 2
              ? "bg-[#222]"
              : "bg-white drop-shadow-[0_5px_0px_rgba(25,26,35,1)]"
          } ${index === 2 ? "order-4 lg:order-none" : ""}`}
        >
          <div className="flex flex-col justify-between">
            <Tags
              text1={data.text1}
              text2={data.text2}
              className={`text-[22px] ${
                index === 1 || index === 2 ? "bg-white" : "bg-[#B9FF66] "
              }`}
            />
            <div
              className="flex items-center gap-2 w-max
          "
            >
              <div
                className={`w-8 h-8 rounded-full p-4 flex items-center justify-center ${
                  index === 1 || index === 2
                    ? "bg-white text-black"
                    : "bg-black text-[#B9FF66]"
                }`}
              >
                <i className="ri-arrow-right-up-line text-2xl"></i>
              </div>
              <a
                href="#"
                className={`poppins text-[14px] hover:underline ${
                  index === 1 || index === 2 ? "text-white" : "text-gray-600"
                }`}
              >
                Learn more
              </a>
            </div>
          </div>
          <img
            src={data.img}
            alt="img-service"
            className="sm:w-[180px] w-[140px] self-center"
          />
        </div>
      ))}
    </>
  );
};

export default ServiceBox;
