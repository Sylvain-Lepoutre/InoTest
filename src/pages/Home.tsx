import NavBar from "@components/header/NavBar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header>
        <NavBar href="#main" title="Inotest" />
      </header>
      <section className="md:grid md:grid-cols-2 md:grid-rows-2 md:justify-items-start">
        <div className="h-[8rem] md:h-[35vh] flex flex-col items-center justify-center md:col-start-1 md:row-start-1 md:place-content-end">
          <h2 className="title md:max-w-min text-3xl md:block lg:block xl:block md:text-4xl xl:text-5xl lg:text-5xl md:ml-[35rem] lg:ml-[45rem] xl:mt-[-3.5rem] xl:ml-[59rem]">
            Accessibility Testing
          </h2>
        </div>
        <div className="md:mt-[10rem] mt-60 md:grid md:col-start-2 md:row-start-2 flex justify-center">
          <Link
            to="/getstarted"
            className="bg-[#000] buttonClass text-white w-[15rem] rounded-lg h-[3rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center"
          >
            GET STARTED
          </Link>
        </div>
      </section>
    </>
  );
}
