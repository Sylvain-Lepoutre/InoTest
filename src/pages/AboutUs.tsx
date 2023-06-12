import NavBar from "@components/header/NavBar";

import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export default function Home() {
  const { t } = useTranslation();
  i18n.language;

  return (
    <>
      <header>
        <NavBar href="#main" title="Inotest" />
      </header>

      <section className="flex flex-col md:flex-row md:gap-0 gap-6 justify-center items-center md:grid md:grid-cols-2 md:grid-rows-2 md:justify-items-start h-[90vh]">
        <div className=" md:ml-[3rem] col-start-1 row-start-1 md:-top-[5rem] md:-mt-[3.5rem] relative md:text-7xl text-4xl font-bold flex flex-row items-start lg:text-9xl lg:mt-[7rem] lg:ml-[5rem]">
          <h1 className="title">
            Inotest
            {location.pathname !== "/getstarted" &&
              location.pathname !== "/path1" &&
              location.pathname !== "/path2" && (
                <p className="scale-50 lg:block absolute top-0 left-[25rem] xl:mt-[-3rem] xl:mr-[-4.5rem] lg:mt-[-3.5rem] lg:mr-[-4.5rem] hidden">
                  ©
                </p>
              )}
          </h1>
        </div>
        <div className="grid col-start-1 row-start-2 md:-mt-[20rem] md:ml-28">
          <article
            aria-label="about us"
            className="flex flex-col justify-center items-center mx-2 windowStyle w-[20rem] md:w-[25rem] h-[25rem] p-10 rounded md:block lg:block xl:block md:ml-[20rem] lg:ml-[36rem] xl:ml-[46rem] md:col-start-2 md:row-start-1 mr-6 place-self-end"
          >
            <p className="windowStyle">{t("inolib")}</p>
            <a
              href="https://www.inolib.com/"
              className="justify-center items-center buttonClass2 focus:outline-none my-6 focus:border-slate-700 focus:ring-2 focus:ring-slate-700 text-black w-[10rem] rounded h-[3rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex"
            >
              {t("learnmore")}
            </a>
          </article>
        </div>
      </section>
    </>
  );
}
