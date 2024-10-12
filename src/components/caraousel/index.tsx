import Image from "next/image";
import React from "react";

const Companies = () => {
  const images = [
    {
      url: "/images/tools/angular.png",
      alt: "angular",
      height:20,
      width:220
    },
    {
      url: "/images/brands/nextjs.png",
      alt: "nextjs",
      height:44,
      width:100
    },
    {
      url: "/images/brands/react.png",
      alt: "react",
      height:44,
      width:100
    },
    {
      url: "/images/brands/redux.svg",
      alt: "redux",
      height:44,
      width:100
    },
    {
      url: "/images/brands/scss.svg",
      alt: "Scss",
      height:44,
      width:100
    },
  ];
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <p className="text-center text-2xl">
        Tools of My<span className="text-[#00909e]"> Craft</span>
      </p>
      <div className="relative flex items-center overflow-x-hidden px-20">
        <div className="py-12 animate-marquee whitespace-nowrap flex">
          {images?.map((img) => (
            <Image
              key={img.url}
              className="mx-20"
              src={img.url}
              alt={img.alt}
              width={img.width}
              height={img.height}
            />
          ))}
        </div>
        <div className="absolute top-0 py-14 animate-marquee2 whitespace-nowrap flex">
          {images?.map((img) => (
            <Image
              key={img.url}
              className="mx-20"
              src={img.url}
              alt={img.alt}
              width={img.width}
              height={img.height}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
