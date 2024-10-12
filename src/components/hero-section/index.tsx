import React from "react";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 h-[88vh]">
      <div className="flex justify-center items-center flex-col h-full">
        <h1 className="text-center text-xl leading-6 md:text-4xl lg:text-[60px] lg:leading-[100px] main-text">
          Crafting Seamless Digital Experiences <br /> with <span className="text-[#00909e]">Code</span> and
          Creative <span className="text-[#00909e]">Design</span>.
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
