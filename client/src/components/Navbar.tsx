"use client";

import React, { useState } from "react";
import SignInForm from "./SignInForm";

type Props = {
  default: "student" | "tutor";
};

export const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex text-black items-center justify-between flex-wrap bg-white p-6 dark:text-white dark:bg-gray-800">
        <div className="flex items-center flex-shrink-0 mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="text-3xl md:text-5xl tracking-tight">
            Tutoring Website
          </span>
        </div>
        <div>
          <button className="mr-16 bg-[rgb(25,114,120)] px-6 py-3 rounded-lg text-white text-lg hover:bg-[rgb(40,94,98)]" onClick={() => setIsOpen(true)}>Login</button>
        </div>
        {/* <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-sm border-black-400 hover:border-black">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div> */}
      </nav>
      {isOpen && <SignInForm isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};
