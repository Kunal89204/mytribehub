import React from "react";
import Btn from "./Btn";

const Proposal = () => {
  return (
    <section
      id="case-study"
      className="px-4 sm:px-6 lg:px-8 xl:px-24 flex flex-col md:gap-14 font-[NeueMachina]"
    >
      <div className="bg-[#f3f3f3] p-8 md:p-10 lg:p-12 rounded-3xl flex justify-center sm:justify-normal relative">
        <div className="flex flex-col sm:w-1/2">
          <h2 className="text-[22px] font-semibold">
            Let's make things happen
          </h2>
          <p className="text-[14px] font-medium pt-2">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Btn
            title={"Get your free proposal"}
            className={`w-max bg-black text-white hover:bg-transparent hover:text-black py-3 mt-6`}
          />
        </div>
        <div className=" hidden sm:block absolute sm:right-[20px] md:right-[30px] lg:right-[40px] -bottom-3">
          <img
            src="/Illustration.svg"
            className="sm:w-[260px] md:w-[270px] lg:w-[300px]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Proposal;
