import NavBar from "@components/header/NavBar";
import { Link, useLocation } from "react-router-dom";

import ImageSlider from "../components/sliderComponents/ImageSlider";
import TextReveal from "@components/UI/TextReveal";
import { useTranslation } from "react-i18next";
import { Menu } from "@components/sliderComponents/libraryComponents/AccessibilityMenu/Menu";
import { ButtonList } from "@components/sliderComponents/libraryComponents/AccessibilityMenu/ButtonList";
import { Button } from "@components/sliderComponents/libraryComponents/AccessibilityMenu/Button";

const Home = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <>
      <header id="header">
        <NavBar href="#main" />
      </header>
      <section className="md:grid md:grid-cols-2 md:grid-rows-2 md:justify-items-start h-[90vh] mb-12">
        <div className=" md:ml-[3rem] col-start-1 row-start-1 -mt-[3.5rem] ml-4 relative md:text-7xl text-4xl font-bold flex flex-row items-start lg:text-9xl lg:mt-[7rem] lg:ml-[5rem]">
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
        <div className="h-[35vh] flex flex-col items-center justify-center md:col-start-1 md:row-start-1 md:place-content-end">
          <h2 className="title md:max-w-min text-3xl md:block lg:block xl:block md:text-4xl xl:text-5xl lg:text-5xl md:ml-[35rem] lg:ml-[45rem] xl:mt-[-3.5rem] xl:ml-[59rem]">
            {t("home-title")}
          </h2>
        </div>
        <div className="md:mt-[5rem] mt-60 flex min-[1050px]:flex-row flex-col items-center gap-6 md:col-start-2 md:row-start-2">
          <Link
            to="/getstarted"
            className="bg-[#000] buttonClass text-white w-[15rem] rounded-lg h-[3rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center"
          >
            {t("getstarted")}
          </Link>
          <a
            href="#main"
            className="bg-[#000] buttonClass text-white w-[15rem] rounded-lg h-[3rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center"
          >
            {t("library")}
          </a>
        </div>
      </section>
      <Menu style="flex justify-center bg-slate-300 h-[5rem] items-center ">
        <Menu.ButtonList style=" h-[3rem] flex flex-row">
          <Menu.Button selectOption="font" style="p-2 bg-white mx-2 rounded">
            <option value="select a option">Font size</option>
            <option value="small">small</option>
            <option value="medidum">medium</option>
            <option value="large">large</option>
          </Menu.Button>
          <Menu.Button selectOption="line" style="p-2 bg-white mx-2 rounded">
            <option value="select a option">Line spacing</option>
            <option value="small">small</option>
            <option value="medidum">medium</option>
            <option value="large">large</option>
          </Menu.Button>
          <Menu.Button selectOption="image" style="p-2 bg-white mx-2 rounded">
            <option value="select a option">Image</option>
            <option value="small">visible</option>
            <option value="medidum">hidden</option>
          </Menu.Button>
        </Menu.ButtonList>
      </Menu>
      <section id="main">
        <TextReveal />
        <div className="flex flex-col gap-6 max-w-3xl ml-5 p-6 mt-0 items-start reveal">
          <h2 className="title text-3xl md:text-4xl xl:text-5xl lg:text-5xl font-semibold">{t("library-title")}</h2>
          <p className="title text-xl">{t("library-content")}</p>
        </div>
      </section>
      <article className="flex flex-col items-center justify-end overflow-x-hidden">
        <div className="mt-36">
          <ImageSlider />
        </div>
      </article>
    </>
  );
};

export default Home;
