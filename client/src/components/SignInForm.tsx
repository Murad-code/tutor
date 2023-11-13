"use client";

import React, { Fragment } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Dialog, Transition } from "@headlessui/react";

type Props = {
  isOpen: true | false;
  setIsOpen: (state: boolean) => void;
};

type FormInput = {
  email: string;
  password: string;
};

const SignInForm = (props: Props) => {
  const { register, handleSubmit } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const responseData = await res.json();
      console.log("Success:", responseData);
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  return (
    <Transition
      show={props.isOpen}
      enter="transition duration-300 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog open={props.isOpen} onClose={() => props.setIsOpen(false)}>
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg 2xl:mx-96">
            <Dialog.Title
              className={
                "bg-[#197278] p-8 rounded-t-lg 2xl:p-8 2xl:rounded-t-lg text-white text-2xl"
              }
            >
              Log In
            </Dialog.Title>
              <form
                className="flex-grow md:max-w-[800px] bg-white  dark:text-white dark:bg-gray-800 space-y-4 md:space-y-6 mt-2 rounded-2xl p-6 md:px-20 md:py-10"
                action="#"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2  md:text-lg font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm: md:text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    {...register("email", { required: true })}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2  md:text-lg font-medium"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm: md:text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="password"
                    {...register("password", { required: true })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#197278] hover:bg-[rgb(40,94,98)] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg  md:text-2xl px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Login
                </button>
              </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SignInForm;
