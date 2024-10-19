import React from "react";
import Tags from "../Tags";
import ServiceBox from "./ServiceBox";

const Services = () => {
  return (
    <section
      id="Services"
      className="px-4 sm:px-6 lg:px-8 xl:px-24 flex flex-col md:gap-14 gap-10"
    >
      <div className="service-text flex flex-col sm:flex-row items-center gap-6 lg:w-10/12 xl:w-1/2">
        <Tags text1="Services" className={`bg-[#B9FF66] py-1`} />
        <p className="poppins text-[14px] text-gray-600 text-center sm:text-left">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These service include:
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
        <ServiceBox />
      </div>
    </section>
  );
};

export default Services;
