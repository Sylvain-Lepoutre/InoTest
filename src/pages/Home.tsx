import { Link, useLocation } from "react-router-dom";

// import ImageSlider from "../components/sliderComponents/ImageSlider";
import TextReveal from "@components/UI/TextReveal";
import { useTranslation } from "react-i18next";
import GridLayout from "@components/UI/LibraryComponents";

const Home = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <>
      <section id="main" className="md:grid md:grid-cols-2 md:grid-rows-2 md:justify-items-start h-[90vh] mb-12">
        <div className=" md:ml-[3rem] col-start-1 row-start-1 -mt-[3.5rem] ml-4 relative md:text-7xl text-4xl font-bold flex flex-row items-start lg:text-9xl lg:mt-[7rem] lg:ml-[5rem]">
          <h1 className="title">
            Inotest
            {location.pathname !== "/getstarted" &&
              location.pathname !== "/path1" &&
              location.pathname !== "/path2" && (
                <span className="scale-50 lg:block absolute top-0 left-[25rem] xl:mt-[-3rem] xl:mr-[-4.5rem] lg:mt-[-3.5rem] lg:mr-[-4.5rem] hidden">
                  ©
                </span>
              )}
          </h1>
        </div>
        <div className="h-[35vh] flex flex-col items-center justify-center md:col-start-1 md:row-start-1 md:place-content-end">
          <h2 className="title md:max-w-min text-3xl md:block lg:block xl:block md:text-4xl xl:text-5xl lg:text-5xl md:ml-[35rem] lg:ml-[45rem] xl:mt-[-3.5rem] xl:ml-[59rem]">
            {t("home-title")}
          </h2>
        </div>
        <div className="md:mt-[5rem] mt-60 flex min-[1050px]:flex-row flex-col items-center gap-7 md:col-start-2 md:row-start-2">
          <Link
            to="/getstarted"
            className="bg-[#000] buttonClass text-white w-[15rem] rounded-lg h-[3rem] transition ease-in-out delay-150  hover:scale-110 duration-300 flex justify-center items-center"
          >
            {t("getstarted")}
          </Link>
          <a
            href="#main"
            className="bg-[#000] buttonClass text-white w-[15rem] rounded-lg h-[3rem] transition ease-in-out delay-150  hover:scale-110 duration-300 flex justify-center items-center"
          >
            {t("library")}
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
