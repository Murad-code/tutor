"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
type Props = {};

type FormInput = {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
  subject: string;
  address: string;
  city: string;
  postCode: string;
};

const SignUpForm = (props: Props) => {
  const { register, handleSubmit } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
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
    <form
      className="flex-grow md:max-w-[800px] bg-white  dark:text-white dark:bg-gray-800 space-y-4 md:space-y-6 mt-10 rounded-2xl p-6 md:px-20 md:py-10"
      action="#"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label htmlFor="name" className="block mb-2  md:text-lg font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm: md:text-lg rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John Smith"
          {...register("name", { required: true })}
        />
      </div>
      {/* <div>
        <label htmlFor="phoneNumber" className="block mb-2  font-medium">
          Phone Number
        </label>
        <input
          type="number"
          id="phoneNumber"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm: md:text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="07123 456789"
          style={{ appearance: "textfield" }} // Removes the increment/decrement buttons
          {...register("phoneNumber", { required: true })}
        />
      </div> */}
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
      {/* <div>
        <label htmlFor="subject" className="block mb-2  font-medium">
          Subjects
        </label>
        <input
          type="string"
          id="subject"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm: md:text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Maths, Physics, Computer Science..."
          {...register("subject", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="address" className="block mb-2  font-medium">
          Address
        </label>
        <input
          type="text"
          id="address"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm: md:text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="123 Elm Street"
          {...register("address", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="city" className="block mb-2  font-medium">
          City
        </label>
        <input
          type="text"
          id="city"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm: md:text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="London"
          {...register("city", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="postCode" className="block mb-2  font-medium">
          Post Code
        </label>
        <input
          type="text"
          id="postCode"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm: md:text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="SW1A 1AA"
          {...register("postCode", { required: true })}
        />
      </div> */}
      <button
        type="submit"
        className="w-full text-white bg-[#197278] hover:bg-[rgb(40,94,98)] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg  md:text-2xl px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Create an account
      </button>
      <p className="md:text-lg font-light text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <a
          href="#"
          className="font-medium text-primary-600 md:text-lg hover:underline dark:text-primary-500"
        >
          Login here
        </a>
      </p>
    </form>
  );
};

export default SignUpForm;
