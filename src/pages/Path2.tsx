import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "@components/header/NavBar";
import TrueArticle from "@components/trueComponents/TrueArticle";
import TrueStepper from "@components/trueComponents/TrueStepper";
import TrueNavBar from "@components/trueComponents/TrueNavBar";
import TrueForm from "@components/trueComponents/TrueForm";
import useEscapeKey from "../hook/useEscapeKey";
import RightModalButton from "@components/UI/RightModal";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export default function Path2() {
  const { t } = useTranslation();
  i18n.language;
  const [activeStep2, setActiveStep2] = useState<number>(0);
  const escapeRef = useRef<HTMLElement>(null);

  useEscapeKey(escapeRef);

  return (
    <>
      <section>
        <header>
          <NavBar href="#main" escapeRef={escapeRef} />
        </header>

        <section
          className="overflow-auto overflow-x-hidden mx-2 sm:mx-16 mb-6 h-[70vh] rounded shadow-lg md:mt-[1rem] windowStyle testing"
          role="tablist"
        >
          <TrueNavBar activeStep2={activeStep2} setActiveStep2={setActiveStep2} />
          {activeStep2 === 0 ? (
            <div role="tab">
              <TrueArticle
                title={t("article-title")}
                subTitle={t("true-title")}
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac interdum lectus, vitae tempus arcu. Donec molestie nisi diam, sed mattis dui volutpat eu. Pellentesque hendrerit nisl vitae mollis rhoncus. Suspendisse sed dolor in dui bibendum rhoncus ac quis odio. Suspendisse tempor odio eu aliquet ultrices."
                imageSrcTop="https://picsum.photos/id/112/200/300"
                imageSrcBottom="https://picsum.photos/id/103/300/200"
                style="windowStyle md:mt-0 mt-12"
                styleContainer="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8 md:mt-[-1em]"
                styleSubContainer="grid items-center md:grid-cols-2 md:gap-x-20"
                styleImageContainer="md:pr-12 pr-0 md:block flex flex-col items-center"
                styleTextContainer="windowStyle"
                styleImage="md:block flex flex-col relative max-w-xs"
                styleImageTop="hidden md:block object-bottom rounded-md scale-75 object-cover h-[22rem]"
                styleImageBottom="md:absolute md:origin-bottom-right scale-75 md:scale-75 rounded -bottom-6 md:-bottom-12 md:-right-12"
                styleTitle="text-3xl text-center md:text-left font-bold leading-tight sm:text-4xl lg:text-5xl"
                styleSubTitle="text-xl text-center md:text-left font-bold leading-tight sm:text-2xl lg:text-3xl mt-2"
                styleContent="mt-6 md:text-base leading-relaxed"
              />

              <TrueStepper />
            </div>
          ) : (
            <section className="flex flex-row gap-12 justify-center items-center p-x-6" role="tab">
              <TrueForm />
              <img
                src="https://picsum.photos/800/500"
                className="min-[1250px]:block hidden max-w-md mb-12 mt-8 shadow rounded"
                alt=""
                aria-hidden="true"
                role="presentation"
              />
              <RightModalButton
                buttonText="✓"
                modalContent={t("image-right")}
                style="text-black mt-3 md:mt-0 place-self-center min-[1250px]:block hidden"
              />
            </section>
          )}
        </section>

        <section className="md:grid md:grid-cols-2 md:justify-items-end flex flex-col gap-1 justify-center items-center h-fit">
          <Link
            to="/path1"
            className="md:col-start-1 md:place-self-start buttonClass w-[15rem] rounded-lg xl:h-[2rem] 2xl:h-[3rem] md:ml-16 md:row-start-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center"
          >
            {t("previous")}
          </Link>
          <Link
            to="/"
            className="md:col-start-2 buttonClass w-[15rem] rounded-lg xl:h-[2rem] 2xl:h-[3rem] md:mr-16 md:row-start-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center"
          >
            {t("return-home")}
          </Link>
        </section>
      </section>
    </>
  );
}
