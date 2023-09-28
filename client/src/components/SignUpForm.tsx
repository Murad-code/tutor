import React from "react";

type Props = {};

const SignUpForm = (props: Props) => {
  return (
    <div className="SignUpContainer md:flex space-x-4 text-black ">
      <div className="flex-grow md:max-w-[500px]  SignUpHeader mt-20 text-white">
        <h2 className="text-center text-bold text-2xl md:text-6xl">
          Become A Tutor!
        </h2>
        <h3 className="text-center text-sm md:text-2xl italic mt-12">
          Fill in the details to join our community of knowledge sharers and
          become a tutor!
        </h3>
      </div>
      <form
        className="flex-grow bg-white  dark:text-white dark:bg-gray-800 space-y-4 md:space-y-6 mt-10 rounded-2xl p-6 md:px-20 md:py-10"
        action="#"
      >
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John Smith"
            required={true}
          />
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block mb-2 text-sm font-medium"
          >
            Phone Number
          </label>
          <input
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="07123 456789"
            required={true}
            style={{ appearance: "textfield" }} // Removes the increment/decrement buttons
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
            required={true}
          />
        </div>
        <div>
          <label htmlFor="address" className="block mb-2 text-sm font-medium">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123 Elm Street"
            required={true}
          />
        </div>
        <div>
          <label htmlFor="city" className="block mb-2 text-sm font-medium">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="London"
            required={true}
          />
        </div>
        <div>
          <label htmlFor="postCode" className="block mb-2 text-sm font-medium">
            Post Code
          </label>
          <input
            type="text"
            name="postCode"
            id="postCode"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="SW1A 1AA"
            required={true}
          />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
