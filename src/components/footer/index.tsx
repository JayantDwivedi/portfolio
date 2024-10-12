import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      url: "https://www.linkedin.com/in/jayant-dwivedi/",
      imageUrl: "icons/linkedin.svg",
      alt: "linkedin",
    },
    {
      url: "https://www.linkedin.com/in/jayant-dwivedi/",
      imageUrl: "icons/instagram.svg",
      alt: "instagram",
    },
    {
      url: "https://www.linkedin.com/in/jayant-dwivedi/",
      imageUrl: "icons/github.svg",
      alt: "github",
    },
  ];
  return (
    <div className="bg-[#202020] flex justify-center items-center flex-col py-10 gap-4">
      <h3>Jayant Dwivedi</h3>
      <div className="flex gap-8">
        {socialLinks?.map((link) => (
          <Link key={link.imageUrl} target="_blank" href={link.url}>
            <Image src={link.imageUrl} width={24} height={24} alt={link.alt} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
