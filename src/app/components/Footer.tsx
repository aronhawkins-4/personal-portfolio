import React from "react";

export const Footer = () => {
  return (
    <div className=" pt-[1px] overflow-hidden relative footer-gradient before:content-[''] before:w-screen before:aspect-square before:absolute before:bg-gradient-to-r before:from-blue-500 before:via-red-400 before:to-rose-500 before:rounded-full before:-top-[50vw]">
      <div className="w-full p-4 mt-auto flex justify-center bg-black relative">
        <p className="text-white font-light text-center">
          This site was made by Aron Hawkins using TypeScript, Next.js, and
          TailwindCSS. Deployed on Vercel.
        </p>
      </div>
    </div>
  );
};
