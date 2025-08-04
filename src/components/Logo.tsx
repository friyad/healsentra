import React from "react";
import logo from "@/assets/images/logo.png";
import Image from "next/image";

const Logo = () => {
  return (
    <a href="" className="flex justify-start items-center gap-2">
      <Image
        src={logo}
        alt="Healsentra Logo"
        width={32}
        height={32}
        className="size-8"
      />
      <span className="text-2xl font-extrabold italic">Healsentra</span>
    </a>
  );
};

export default Logo;
