import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import Logo from "../imgs/logo_01.png";
import Github from "../imgs/github_icon.png";
import LinkedIn from "../imgs/linkedin_icon.png";

export default function Header() {
  return (
    <header className="flex justify-center items-center py-8 shadow-md ">
      <div className="w-1/3 text-center">
        <HashLink smooth to="" className="p-4 hover:underline decoration-gray-900 decoration-4">Home</HashLink>
        <HashLink smooth to="" className="p-4 hover:underline decoration-gray-900 decoration-4">Work</HashLink>
        <HashLink smooth to="" className="p-4 hover:underline decoration-gray-900 decoration-4">About</HashLink>
      </div>
      <div className="flex justify-center">
        <img src={Logo} alt="logo" className="w-1/6" />
      </div>
      <div className="flex w-1/3 justify-center">
        <Link to="" className="w-12 mx-4">
          <img src={Github} alt="github" className="" />
        </Link>
        <Link to="" className="w-12 mx-4">
          <img src={LinkedIn} alt="linkedin" className="" />
        </Link>
      </div>
    </header>
  );
}