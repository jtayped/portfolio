import { Posts_main } from "./components";
import { useTranslations } from "next-intl";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "@/navigation";

const Page = () => {
  const t = useTranslations("Blog.hero");

  return (
    <div className="relative text-black px-8 py-10 flex items-center justify-center mt-[100px]">
      <main className="max-w-[900px] flex items-center justify-center">
        <div>
          <div className="max-w-[600px] flex flex-col gap-3">
            <h1 className="text-4xl sm:text-6xl font-bold">{t("title")}</h1>
            <p>{t("description")}</p>
            <Link
              className="bg-black text-white px-3 py-2 rounded w-fit hover:bg-black/90 flex items-center gap-2 text-sm"
              href="/"
            >
              {t("button")}
              <FaArrowRight />
            </Link>
          </div>
          <Posts_main />
        </div>
      </main>
    </div>
  );
};

export default Page;
