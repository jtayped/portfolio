"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ContactInput = ({ placeholder, type, autocomplete }) => {
  return (
    <div className="border border-black rounded p-2">
      <input
        placeholder={placeholder}
        type={type}
        autoComplete={autocomplete}
        className="w-full bg-transparent outline-none placeholder:text-black placeholder:text-sm"
      />
    </div>
  );
};

const ContactForm = ({ name, lastName, email, subject, message, sendBtn }) => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      className="flex flex-col gap-2 mt-5 max-w-[370px]"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="grid grid-cols-2 gap-2">
        <ContactInput
          placeholder={name}
          type="text"
          autocomplete="given-name"
        />
        <ContactInput
          placeholder={lastName}
          type="text"
          autocomplete="family-name"
        />
      </div>
      <ContactInput placeholder={email} type="email" autocomplete="email" />
      <ContactInput placeholder={subject} type="text" autocomplete="off" />
      <div className="border border-black p-2 rounded">
        <textarea
          className="w-full bg-transparent outline-none placeholder:text-black placeholder:text-sm"
          name={message}
          placeholder={message}
          cols="30"
          rows="8"
          autoComplete="off"
        ></textarea>
      </div>
      <div className="grid sm:grid-cols-2 gap-2">
        <div className="flex sm:hidden" />
        <button
          type="submit"
          className="bg-black hover:bg-black/95 py-2 text-white text-sm rounded font-bold flex justify-center items-center gap-2"
        >
          {sendBtn}
          <FaArrowRight />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
