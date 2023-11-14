"use client";
import { useState } from "react";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import classNames from "classnames";
import LoginForm from "./LoginForm";
import DialogWrapper from "./DialogWrapper";
import SignUpForm from "./SignUpForm";

const navigation = [
  { title: "Search Tutor", path: "#" },
  { title: "Subjects", path: "#" },
  { title: "Pricing", path: "#" },
  { title: "Contact", path: "#" },
];

export default function Navbar() {
  return (
    <>
      <div className="px-3 max-w-screen-xl py-3 mx-auto  min-h-[120px]">
        <nav className="relative flex flex-wrap items-center justify-between py-6 mx-auto lg:justify-between">
          <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
            <Logo />
            {/* Mobile Menu  */}
            <MobileMenu />
          </div>

          {/* Desktop Menu  */}
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 lg:pt-0 list-reset lg:flex">
              <NavItems navigation={navigation} />
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

const Logo = () => {
  return (
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
  );
};

const Hamburger = ({ open }) => {
  return (
    <Disclosure.Button
      aria-label="Toggle Menu"
      className="px-2 py-1 ml-auto text-gray-700 rounded-md lg:hidden hover:text-[rgb(25,114,120)] focus:text-[rgb(40,94,98)] focus:bg-green-50 focus:outline-none "
    >
      <svg
        className="w-6 h-6 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {open && (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
          />
        )}
        {!open && (
          <path
            fillRule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          />
        )}
      </svg>
    </Disclosure.Button>
  );
};

const MobileMenu = () => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Hamburger open={open} />

          <Disclosure.Panel className="flex flex-col w-full my-5 lg:hidden">
            <>
              <NavItems navigation={navigation} mobile={true} />
            </>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
const ActionButtons = ({ mobile }: { mobile: boolean }) => {
  const [isLoginOpen, setIsLoginInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  return (
    <div
      className={classNames(
        mobile ? "flex gap-3 mt-2" : "hidden mx-3 gap-3 lg:flex"
      )}
    >
      <div>
        <button
          className="mr-8 md:ml-14 md:mr-2 bg-[rgb(25,114,120)] px-4 py-2 rounded-lg text-white text-lg hover:bg-[rgb(40,94,98)]"
          onClick={() => setIsLoginInOpen(true)}
        >
          Login
        </button>
      </div>
      <div>
        <button
          className="mr-16 md:mr-10 bg-[rgb(25,114,120)] px-4 py-2 rounded-lg text-white text-lg hover:bg-[rgb(40,94,98)]"
          onClick={() => setIsSignUpOpen(true)}
        >
          Sign Up
        </button>
      </div>

      {isLoginOpen && (
        <DialogWrapper
          title="Login"
          isOpen={isLoginOpen}
          setIsOpen={setIsLoginInOpen}
        >
          <LoginForm />
        </DialogWrapper>
      )}

      {isSignUpOpen && (
        <DialogWrapper
          title="Sign Up"
          isOpen={isSignUpOpen}
          setIsOpen={setIsSignUpOpen}
        >
          <SignUpForm />
        </DialogWrapper>
      )}
    </div>
  );
};
const NavItems = (props) => {
  return (
    <>
      {props.navigation.map((item, index) => {
        return (
          <div key={index}>
            <MenuItem item={item} mobile={props.mobile} />
          </div>
        );
      })}
      <ActionButtons mobile={true} />
    </>
  );
};

const MenuItem = ({ item, mobile }) => {
  return (
    <Link
      href={item?.path ? item.path : "/tutor"}
      className={classNames(
        "text-gray-700 dark:text-gray-300 text-lg rounded-md outline-none hover:text-[rgb(25,114,120)] focus:text-[rgb(40,94,98)] transition-all focus-visible:ring-1 ring-indigo-300 dark:focus-visible:bg-gray-800 focus:outline-none",
        mobile ? "w-full block px-4 py-2 -ml-4" : "inline-block px-4 py-2"
      )}
    >
      {item.title}
    </Link>
  );
};
