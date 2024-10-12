import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-24">
      <p className="text-3xl md:text-6xl text-left mb-20 px-0 lg:px-12">About <span className="text-[#00909e]">Me</span></p>
      <div className="flex flex-col lg:flex-row px-0 lg:px-12  gap-8">
        <div className="text-sm leading-relaxed md:text-2xl text-justify  w-full lg:w-1/2 order-2 lg:order-1">
          I am a skilled Frontend Developer with over 3+ years of experience
          building responsive, user-centric web applications using modern
          technologies such as Angular, React, Next.js, JavaScript, HTML, CSS,
          and SCSS. I specialize in creating seamless, high-performance user
          interfaces, focusing on accessibility and design precision. With a
          keen eye for detail and a passion for clean, maintainable code, I
          thrive in collaborative environments where I can contribute to
          delivering visually stunning, functional digital experiences.
        </div>
        <div className="w-full lg:w-1/2 order-1 lg:order-2 flex items-center justify-center">
        <div className="w-[300px] h-[300px]  ">
          <Image 
          className="rounded-[50%]"
          src="/images/profile/illustration.png"
          alt="dp"
          width={1000}
          height={1000}
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
