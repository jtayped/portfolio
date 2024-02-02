import { Posts_main } from "./components";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Blog.hero");

  return (
    <div className="relative text-black px-8 py-10 flex items-center justify-center mt-[100px] sm:mt-[200px]">
      <main className="max-w-[900px] flex items-center justify-center">
        <div>
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold">{t("title")}</h1>
            <p className="mt-2">{t("description")}</p>
          </div>
          <Posts_main />
        </div>
      </main>
    </div>
  );
};

export default Page;
