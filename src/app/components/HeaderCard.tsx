import Image from "next/image";
import aron_headshot from "../../../public/aron_images/aron_headshot.png";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { VscMail } from "react-icons/vsc";
import Link from "next/link";

export const HeaderCard = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center max-w-5xl m-auto">
      <div className="rounded-full w-64 h-64 relative">
        <Image
          src={aron_headshot}
          alt="Aron sitting at his desk"
          fill
          className="rounded-full object-cover"
          sizes="any"
        />
      </div>
      <h1 className="text-7xl text-white font-bold mt-8 text-center">
        <span className="bg-gradient-to-r from-blue-500 via-red-400 to-rose-500 bg-clip-text text-transparent">
          Hello, I&apos;m Aron,
        </span>
        &nbsp;a full-stack software developer from Texas.
      </h1>
      <p className=" text-2xl font-light text-center mt-4">
        I specialize in building end-to-end applications using TypeScript,
        React, and Next.js. I am experienced in fields including SAAS
        applications, e-commerce platforms, and mobile development.
      </p>
      <div className="flex gap-4 justify-center m-auto mt-8">
        <Link
          href=""
          className="px-8 py-4 rounded-full w-48 uppercase border border-white text-center bg-white text-black transition-colors hover:bg-transparent hover:text-white "
        >
          <span className="-mb-1">Get In Touch</span>
        </Link>
        <Link
          href=""
          className="px-8 py-4 rounded-full w-48 uppercase border border-white text-center transition-colors hover:bg-white hover:text-black "
        >
          <span className="-mb-1">View My Work</span>
        </Link>
      </div>
      {/* <div className="flex md:flex-col gap-6 mt-4 md:mt-0 h-16 w-max md:h-full md:w-16 p-4 bg-gradient-to-b from-gray-500 to-gray-700 rounded-full justify-center">
        <Link href="mailto:hawkins.aron@gmail.com" target="_blank">
          <VscMail size={32} className="transition hover:scale-110" />
        </Link>
        <Link href="https://github.com/aronhawkins-4" target="_blank">
          <AiFillGithub size={32} className="transition hover:scale-110" />
        </Link>
        <Link href="https://linkedin.com/in/aron-hawkins" target="_blank">
          <AiFillLinkedin size={32} className="transition hover:scale-110" />
        </Link>
        <Link href="https://instagram.com/aronhawkins" target="_blank">
          <AiOutlineInstagram
            size={32}
            className="transition hover:scale-110"
          />
        </Link>
      </div> */}
    </div>
  );
};
