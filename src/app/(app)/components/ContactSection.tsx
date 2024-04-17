import { ContactForm } from "./ContactForm";

export const ContactSection = () => {
  return (
    <div
      className="w-full max-w-7xl m-auto flex flex-col gap-4 items-start pb-16 self-start px-8 md:px-16"
      id="contact"
    >
      <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-500 via-red-400 to-rose-500 bg-clip-text text-transparent">
        Contact Me
      </h2>

      <ContactForm />
    </div>
  );
};
