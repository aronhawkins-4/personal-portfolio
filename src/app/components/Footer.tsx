import React from 'react';

export const Footer = () => {
    return (
        <div className="w-full p-8 mt-auto flex justify-center border-t border-t-gray-600 bg-gradient-to-tr from-transparent to-gray-400/50">
            <p className="text-white/75 font-light">
                This site was made by Aron Hawkins using Next.js, TypeScript,
                and TailwindCSS. Deployed on Vercel.
            </p>
        </div>
    );
};
