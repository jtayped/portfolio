"use client";
import React from "react";
import Link from "next/link";
import { MdAlternateEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";

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

const Contact = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div
      className="text-black px-8 py-10 flex items-center justify-center"
      id="contact"
    >
      <div className="w-[900px] flex flex-col sm:grid sm:grid-cols-2">
        <div className="flex flex-col sm:max-w-[400px] sm:pr-5">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            delectus mollitia asperiores? Accusamus enim perspiciatis, eius
            nihil voluptates iusto, explicabo aut nam veniam dolor excepturi
            fuga beatae debitis ipsam maxime dicta porro minima optio molestias!
          </p>
          <div className="flex gap-1 mt-2">
            <Link
              href="mailto:jtayped@gmail.com"
              className="px-3 py-1 bg-black hover:bg-black/90 transition-colors text-yellow rounded flex items-center gap-2 text-sm"
            >
              <MdAlternateEmail />
              Email
            </Link>
            <Link
              href="https://www.instagram.com/jtayped_"
              className="px-3 py-1 border border-black text-black hover:bg-black/5 transition-colors rounded flex items-center gap-2 text-sm"
            >
              <BsInstagram />
              Instagram
            </Link>
          </div>
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-3 mt-5"
        >
          <div className="grid grid-cols-2 gap-3">
            <ContactInput
              placeholder="Name"
              type="text"
              autocomplete="given-name"
            />
            <ContactInput
              placeholder="Last Name"
              type="text"
              autocomplete="family-name"
            />
          </div>
          <ContactInput placeholder="Email" type="email" autocomplete="email" />
          <ContactInput placeholder="Subject" type="text" autocomplete="off" />
          <div className="border border-black p-2">
            <textarea
              className="w-full bg-transparent outline-none placeholder:text-black placeholder:text-sm"
              name="Message"
              placeholder="Message"
              cols="30"
              rows="8"
              autoComplete="off"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black hover:bg-black/95 py-2 text-yellow text-sm"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
