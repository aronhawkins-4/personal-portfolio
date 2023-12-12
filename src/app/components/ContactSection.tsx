import Image from "next/image";
import chat from "../../../public/Higgins/chat.png";
import sendero from "../../../public/sendero-social-carousel_01 (1).webp";
import pictionary from "../../../public/pictionary.png";
import sidekick from "../../../public/sidekick.webp";
import airbnb from "../../../public/airbnb/home_screen.png";
import restaurants from "../../../public/restaurants/change_vote.png";
import Link from "next/link";
export const ContactSection = () => {
  return (
    <div
      className="w-full max-w-7xl m-auto flex flex-col gap-4 items-start pb-16 self-start px-8 md:px-16"
      id="work"
    >
      <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-500 via-red-400 to-rose-500 bg-clip-text text-transparent">
        Contact Me
      </h2>

      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
