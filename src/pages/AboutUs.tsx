import NavBar from "@components/header/NavBar";

import { useTranslation } from 'react-i18next';
import i18n from "../../i18n";

export default function Home() {
  const { t } = useTranslation();
  i18n.language;

  return (
    <>
      <header>
        <NavBar href="#main" title="Inotest" />
      </header>

      <section className="flex justify-center items-center md:grid md:grid-cols-2 md:grid-rows-1 md:justify-items-start mt-[4rem]">
        <article
          aria-label="about us"
          className="flex flex-col justify-center items-center mx-2 windowStyle w-[25rem] h-[25rem] p-10 rounded md:block lg:block xl:block md:ml-[20rem] lg:ml-[36rem] xl:ml-[46rem] md:col-start-2 md:row-start-1 mr-6 place-self-end"
        >
          <p className="windowStyle">{t('inolib')}</p>
          <a
            href="https://www.inolib.com/"
            className="justify-center items-center buttonClass2 focus:outline-none my-6 focus:border-slate-700 focus:ring-2 focus:ring-slate-700 text-black w-[10rem] rounded h-[3rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex"
          >
            {t('learnmore')}
          </a>
        </article>
      </section>
    </>
  );
}
