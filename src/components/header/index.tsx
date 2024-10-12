import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 bg-black flex justify-center md:justify-end items-center h-[12vh] sticky top-0 z-20">
      <div className="items-center gap-4 flex">
        <Link className="font-semibold" target="_blank" href={"https://drive.google.com/file/d/1LWg8gB5erFpNL8EIY9koPpriDjFQ6AlJ/view?usp=sharing"}>
          Resume
        </Link>
        <span>/</span>
        <Link className="font-semibold" href={"#projects"}>
          Projects
        </Link>
        <span>/</span>
        <Link className="font-semibold" target="_blank" href={"https://www.linkedin.com/in/jayant-dwivedi/"}>
          Linkedin
        </Link>
      </div>
    </div>
  );
};

export default Header;
