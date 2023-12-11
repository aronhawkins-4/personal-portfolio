import React from "react";

export const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-red-400 to-rose-500 pt-[1px]">
      <div className="w-full p-4 mt-auto flex justify-center bg-black ">
        <p className="text-white font-light text-center">
          This site was made by Aron Hawkins using TypeScript, Next.js, and
          TailwindCSS. Deployed on Vercel.
        </p>
      </div>
    </div>
  );
};
