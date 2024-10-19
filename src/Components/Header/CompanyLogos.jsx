import React from "react";

const CompanyLogos = () => {
  const logoSrc = [
    "/service.jpg",
    "/chat.jpg",
    "/map.png",
    "/bot2.jpg",
 
  ];

  return (
    <div className="grid place-items-center grid-cols-2 sm:grid-cols-4 gap-x-6 mt-7 sm:mt-4 md:mt-0 gap-y-4 sm:gap-y-0">
      {logoSrc.map((logo) => (
        <img
          key={logo}
          className={`w-[55%] sm:w-[55%] md:w-[50%] xl:w-[35%] grayscale`}
          src={logo}
          alt="logo"
        />
      ))}
    </div>
  );
};

export default CompanyLogos;
