import { HeaderCard } from "./components/HeaderCard";
import { ContentCard } from "./components/ContentCard";
import { Footer } from "./components/Footer";
import Link from "next/link";
import aron_headshot from "../../public/aron_images/Sidekick-May22-Photoshoot-17 copy.webp";
import Image from "next/image";
import { EducationSection } from "./components/EducationSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { AnimatedBanner } from "./components/AnimatedBanner";
import { AboutSection } from "./components/AboutSection";
import { WorkSection } from "./components/WorkSection";
import { ContactSection } from "./components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <div className="flex flex-col items-center justify-start relative gap-8">
        <div className="flex flex-col gap-2 items-center justify-center max-w-6xl m-auto p-8 md:p-16 ">
          <div className="rounded-full w-64 h-64 relative">
            <Image
              src={aron_headshot}
              alt="Aron sitting at his desk"
              fill
              className="rounded-full object-cover object-[50%_30%]"
              sizes="any"
            />
          </div>
          <h1 className="text-5xl md:text-7xl text-white font-bold mt-8 text-center">
            Hello,&nbsp;
            <span className="bg-gradient-to-r from-blue-500 via-red-400 to-rose-500 bg-clip-text text-transparent">
              I&apos;m Aron
            </span>
            , a full-stack software developer from Texas.
          </h1>
          <p className=" text-xl md:text-2xl font-light text-center mt-4">
            I specialize in building end-to-end applications using TypeScript,
            React, and Next.js. I am experienced in fields including SAAS
            applications, e-commerce platforms, and mobile development.
          </p>
          <div className="flex flex-col w-full sm:flex-row gap-4 justify-center m-auto mt-8">
            <Link
              href=""
              className="px-8 py-4 rounded-full w-full sm:w-48 uppercase font-normal border border-white text-center bg-white text-black transition-colors hover:bg-transparent hover:text-white "
            >
              <span className="-mb-[2px] block">Get In Touch</span>
            </Link>
            <Link
              href="#work"
              className="px-8 py-4 rounded-full w-full sm:w-48 uppercase font-normal border border-white text-center transition-colors hover:bg-white hover:text-black "
            >
              <span className="-mb-[2px] block">View My Work</span>
            </Link>
          </div>
        </div>
        <AnimatedBanner />

        <ExperienceSection />
        <EducationSection />

        <AboutSection />
        <WorkSection />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
