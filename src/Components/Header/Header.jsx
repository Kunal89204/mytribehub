import React from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import CompanyLogos from "./CompanyLogos";


const Header = () => {
  return (
    <section id="header">
      <Navigation />
      <Hero />
      <CompanyLogos />
    
    </section>
  );
};

export default Header;
