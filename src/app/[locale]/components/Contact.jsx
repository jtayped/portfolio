import React from "react";
import Link from "next/link";
import { MdAlternateEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";

const Contact = () => {
  const t = useTranslations("contact");
  return (
    <div
      className="text-black px-8 py-10 flex items-center justify-center"
      id="contact"
    >
      <div className="w-[900px] flex flex-col sm:grid sm:grid-cols-2">
        <div className="flex flex-col sm:pr-5">
          <h2 className="text-3xl font-bold">{t("title")}</h2>
          <p>{t("description")}</p>
          <div className="flex gap-1 mt-2">
            <Link
              href="mailto:jtayped@gmail.com"
              className="px-3 py-1 bg-black hover:bg-black/90 transition-colors text-yellow rounded flex items-center gap-2 text-sm"
            >
              <MdAlternateEmail />
              {t("accentBtn")}
            </Link>
            <Link
              href="https://www.instagram.com/jtayped_"
              className="px-3 py-1 border border-black text-black hover:bg-black/5 transition-colors rounded flex items-center gap-2 text-sm"
            >
              <BsInstagram />
              {t("secondaryBtn")}
            </Link>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-end">
          <ContactForm
            name={t("name")}
            lastName={t("lastName")}
            email={t("email")}
            subject={t("subject")}
            message={t("message")}
            sendBtn={t("sendBtn")}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
