import React from "react";
import { Link } from "react-scroll";
import Tags from "./Tags";
import Btn from "./Btn";

const Footer = () => {
  return (
    <section
      id="footer"
      className="sm:px-6 lg:px-8 xl:px-24 font-[NeueMachina]"
    >
      <div className="bg-[#191A23] py-6 px-6 lg:px-10 sm:rounded-t-3xl flex flex-col gap-9">
        <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row items-center justify-between">
          <a href="#" className="text-white">
            <h1 className="flex items-center gap-1 text-lg lg:text-[22px] font-extrabold">
              <i className="ri-shining-2-fill inline-block rotate-[45deg] text-2xl lg:text-[33px]"></i>
              MyTribeHub
            </h1>
          </a>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-5 lg:gap-12 text-center sm:text-left">
            {[ "Services", "Use Cases"].map(
              (link) => (
                <Link
                  to={link === "Use Cases" ? "case-study" : link}
                  key={link}
                  smooth={true}
                  duration={500}
                  className="text-white text-sm lg:text-[1rem] cursor-pointer sm:relative"
                >
                  {link}
                  <i className="hidden sm:block absolute h-[0.5px] w-full bg-white left-0 bottom-1"></i>
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-3">
            {["ri-linkedin-fill", "ri-facebook-fill", "ri-twitter-fill"].map(
              (icon) => (
                <div
                  key={icon}
                  className="w-7 h-7 lg:w-8 lg:h-8 cursor-pointer rounded-full flex items-center justify-center bg-white text-black"
                >
                  <i className={`${icon} lg:text-lg`}></i>
                </div>
              )
            )}
          </div>
        </div>

        <div className="flex flex-col gap-7 sm:gap-0 sm:flex-row justify-between items-center lg:items-stretch border-b pb-10">
          <div className="flex flex-col gap-2 items-center sm:items-start">
            <Tags
              text2="Contact us:"
              className={`bg-[#B9FF66] text-[1rem] mb-2`}
            />
            {[
              "Email: kunalkhandelwal108@gmail.com",
              "Phone: 9560729291",
              "Address: Delhi, India",
            ].map((item) => (
              <p key={item} className="text-white">
                {item}
              </p>
            ))}
          </div>
          <div className="bg-[#292A32] p-6 lg:px-10 lg:py-5 rounded-lg flex flex-col lg:flex-row items-center gap-5 w-full sm:w-auto">
            <input
              type="email"
              className="outline-none bg-transparent border rounded-lg p-3 text-white w-full sm:w-auto"
              placeholder="Email"
            />
            <Btn
              title={"Subscribe to news"}
              className={
                "bg-[#B9FF66] border border-[#B9FF66] p-3 w-full lg:w-auto"
              }
            />
          </div>
        </div>

        <div className="pb-1 text-white text-sm sm:text-[1rem] flex flex-col sm:flex-row gap-4 sm:gap-12 text-center sm:text-left">
          <p>© 2024 MyTribeHub. All Rights Reserved.</p>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
