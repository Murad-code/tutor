"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginFormInput, handleSignIn } from "../utils/auth";
import { useRouter } from "next/navigation";

type Props = {};

const LoginForm = (props: Props) => {
  const { register, handleSubmit } = useForm<LoginFormInput>();
  const router = useRouter();
  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    handleSignIn(data);
    router.push("/tutor");
  };

  return (
    <form
      className="flex-grow md:max-w-[800px] bg-white  dark:text-white dark:bg-gray-800 space-y-4 md:space-y-6 rounded-b-2xl p-6 md:px-20 md:py-10"
      action="#"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label htmlFor="email" className="block mb-2  md:text-lg font-medium">
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
  );
};

export default LoginForm;
