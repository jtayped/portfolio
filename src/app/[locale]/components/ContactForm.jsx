"use client";
import React from "react";

const ContactInput = ({ placeholder, type, autocomplete }) => {
  return (
    <div className="border border-black p-2">
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
      <div className="grid grid-cols-2 gap-3">
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
      <div className="border border-black p-2">
        <textarea
          className="w-full bg-transparent outline-none placeholder:text-black placeholder:text-sm"
          name={message}
          placeholder={message}
          cols="30"
          rows="8"
          autoComplete="off"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-black hover:bg-black/95 py-2 text-white text-sm"
      >
        {sendBtn}
      </button>
    </form>
  );
};

export default ContactForm;
