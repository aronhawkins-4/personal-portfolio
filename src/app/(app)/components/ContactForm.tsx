"use client";
import { FormEvent, useEffect, useState } from "react";
import { handleSubmit } from "../actions/handleSubmit";
// @ts-expect-error
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const initialState = {
    ok: false,
    message: null,
  };
  const [state, formAction] = useFormState(handleSubmit, initialState);

  useEffect(() => {
    if (!state.ok && state.message) {
      toast.error(state.message);
    } else if (state.ok && state.message) {
      toast.success(state.message);
    }
  }, [state]);
  return (
    <form
      className="max-w-xl w-full mr-auto"
      //   action={formAction}
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        formAction(new FormData(e.currentTarget));
      }}
      //   action={handleSubmit(name,email,company,message)}
    >
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-xl font-medium text-white"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className=" border text-lg rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Jon Snow"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-xl font-medium text-white"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className=" border text-lg rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="jon.snow@gmail.com"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="company"
          className="block mb-2 text-xl font-medium text-white"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className=" border text-lg rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Winterfell Solutions"
          required
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="block mb-2 text-xl font-medium text-white"
        >
          Message
        </label>
        <textarea
          id="message"
          className=" border text-lg rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          name="message"
          required
          rows={4}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </div>

      <button
        type="submit"
        className="text-white transition-colors focus:ring-4 focus:outline-none font-medium rounded-lg text-lg w-full sm:w-auto px-8 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};
