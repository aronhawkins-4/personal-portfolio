import Image from "next/image";
import chat from "../../../public/Higgins/chat.png";
import sendero from "../../../public/sendero-social-carousel_01 (1).webp";
import pictionary from "../../../public/pictionary.png";
import sidekick from "../../../public/sidekick.webp";
import airbnb from "../../../public/airbnb/home_screen.png";
import restaurants from "../../../public/restaurants/change_vote.png";
import Link from "next/link";
export const WorkSection = () => {
  return (
    <div
      className="w-full max-w-7xl m-auto flex flex-col gap-4 items-start pb-16 self-start px-8 md:px-16"
      id="work"
    >
      <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-500 via-red-400 to-rose-500 bg-clip-text text-transparent">
        Stuff I&apos;ve Built
      </h2>
      <div className="py-8 grid grid-cols-1 md:grid-cols-2 w-full gap-8">
        <Link
          href="https://apps.apple.com/us/app/higgins-ai-pro/id6472700410"
          target="_blank"
          className=" bg-slate-950 rounded-xl overflow-hidden transition-transform duration-500 hover:scale-105 group"
        >
          <div className="w-full aspect-video relative overflow-hidden">
            <Image
              src={chat}
              alt=""
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col gap-2 p-8 md:p-12 border-t border-white/50">
            <h3 className="text-2xl md:text-3xl uppercase font-semibold">
              Higgins AI Pro
            </h3>
            <p className="text-lg text-gray-300">
              Mobile RAG chatbot app for IOS and Android
            </p>
          </div>
        </Link>
        <Link
          href="https://senderopc.com/"
          target="_blank"
          className=" bg-slate-950 rounded-xl overflow-hidden transition-transform duration-500 hover:scale-105 group"
        >
          <div className="w-full aspect-video relative overflow-hidden">
            <Image
              src={sendero}
              alt=""
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col gap-2 p-8 md:p-12 border-t border-white/50">
            <h3 className="text-3xl uppercase font-semibold">
              Sendero Provisions Co.
            </h3>
            <p className="text-lg text-gray-300">
              E-commerce site for a national brand
            </p>
          </div>
        </Link>
        <Link
          href="https://www.gamewordgenerator.com/"
          target="_blank"
          className=" bg-slate-950 rounded-xl overflow-hidden transition-transform duration-500 hover:scale-105 group"
        >
          <div className="w-full aspect-video relative overflow-hidden">
            <Image
              src={pictionary}
              alt=""
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col gap-2 p-8 md:p-12 border-t border-white/50">
            <h3 className="text-2xl md:text-3xl uppercase font-semibold">
              Game Word Generator
            </h3>
            <p className="text-lg text-gray-300">
              Web application that lets users word games
            </p>
          </div>
        </Link>
        <Link
          href="https://www.sidekick.agency"
          target="_blank"
          className=" bg-slate-950 rounded-xl overflow-hidden transition-transform duration-500 hover:scale-105 group"
        >
          <div className="w-full aspect-video relative overflow-hidden">
            <Image
              src={sidekick}
              alt=""
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col gap-2 p-8 md:p-12 border-t border-white/50">
            <h3 className="text-2xl md:text-3xl uppercase font-semibold">
              Sidekick Creative Agency
            </h3>
            <p className="text-lg text-gray-300">
              Modern website for local branding agency
            </p>
          </div>
        </Link>
        <Link
          href="https://next13-airbnb-clone-psi.vercel.app/"
          target="_blank"
          className=" bg-slate-950 rounded-xl overflow-hidden transition-transform duration-500 hover:scale-105 group"
        >
          <div className="w-full aspect-video relative overflow-hidden">
            <Image
              src={airbnb}
              alt=""
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col gap-2 p-8 md:p-12 border-t border-white/50">
            <h3 className="text-2xl md:text-3xl uppercase font-semibold">
              Airbnb Clone
            </h3>
            <p className="text-lg text-gray-300">
              Working clone of the popular web app
            </p>
          </div>
        </Link>
        <Link
          href="https://sidekick-decide-app.vercel.app/"
          target="_blank"
          className=" bg-slate-950 rounded-xl overflow-hidden transition-transform duration-500 hover:scale-105 group"
        >
          <div className="w-full aspect-video relative overflow-hidden">
            <Image
              src={restaurants}
              alt=""
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col gap-2 p-8 md:p-12 border-t border-white/50">
            <h3 className="text-2xl md:text-3xl uppercase font-semibold">
              Restaurant Voting App
            </h3>
            <p className="text-lg text-gray-300">
              Web app for friends to vote on restaurants to eat at
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
