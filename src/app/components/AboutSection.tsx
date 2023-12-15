import Image from "next/image";
import aron_at_desk from "../../../public/aron_images/aron_at_desk.jpeg";
import aron_at_desk_horizontal from "../../../public/aron_images/CultureShootSEP23-20.webp";
import birthday from "../../../public/aron_images/IMG_3178.webp";
import aron_jane from "../../../public/aron_images/aron_jane.webp";

export const AboutSection = () => {
  return (
    <div
      className="w-full max-w-7xl m-auto flex flex-col md:flex-row gap-16 items-center mt-8 pb-16  px-8 md:px-16"
      id="about"
    >
      <div className="w-full flex flex-col items-start">
        <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-500 via-red-400 to-rose-500 bg-clip-text text-transparent whitespace-nowrap">
          About me
        </h2>
        <p className=" text-xl font-light mt-4">
          I&apos;m Aron Hawkins, a full-stack software developer based in
          central Texas. I have a degree in Computer Science from Arizona State
          University. My specialties include TypeScript, Next.js, React Native,
          TailwindCSS, REST APIs, GraphQL, and I am a certified expert in
          Webflow, Shopify, and Google Analytics. I&apos;m deeply passionate
          about creating digital experiences that seamlessly blend form and
          function. Whether it&apos;s building sophisticated e-commerce
          platforms or designing intuitive user interfaces, my work is rooted in
          a commitment to optimizing user experiences. I am married and have a
          little 1-year-old running around at home. Feel free to explore my
          projects and contact me through the form below.
        </p>
      </div>

      <div className="grid grid-cols-6 grid-rows-2 gap-4 md:gap-8 w-full min-h-[30rem]">
        <div className="row-span-1 col-span-4 relative w-full h-full rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105">
          <Image
            src={aron_at_desk_horizontal}
            alt=""
            fill
            className=" object-cover w-full h-full transition-transform duration-700 hover:scale-110"
          />
        </div>
        <div className="row-span-1 col-span-2 relative w-full h-full rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105">
          <Image
            src={aron_jane}
            alt=""
            fill
            className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
          />
        </div>
        <div className="row-span-1 col-span-2 relative w-full h-full rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105">
          <Image
            src={aron_at_desk}
            alt=""
            fill
            className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
          />
        </div>
        <div className="row-span-1 col-span-4 relative w-full h-full rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105">
          <Image
            src={birthday}
            alt=""
            fill
            className=" object-cover w-full h-full transition-transform duration-700 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};
