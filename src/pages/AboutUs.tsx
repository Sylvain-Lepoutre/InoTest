import NavBar from "@components/header/NavBar";

export default function Home() {
  return (
    <>
      <header>
        <NavBar href="#main" title="Inotest" />
      </header>

      <section className="flex justify-center items-center md:grid md:grid-cols-2 md:grid-rows-1 md:justify-items-start mt-[5rem]">
        <article
          aria-label="about us"
          className="flex flex-col justify-center items-center mx-2 windowStyle w-[25rem] h-[26rem] p-10 rounded mt-[-3rem] md:block lg:block xl:block md:ml-[20rem] lg:ml-[36rem] xl:mt-[-4.5rem] xl:ml-[46rem] md:col-start-1 md:row-start-1"
        >
          <p className="windowStyle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolor tempora ex accusantium nemo est, quis
            voluptate harum corporis saepe et velit rerum dignissimos eum, accusamus obcaecati veritatis! Illum,
            necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolor tempora ex accusantium
            nemo est, quis voluptate harum corporis saepe et velit rerum dignissimos eum, accusamus obcaecati veritatis!
            Illum, necessitatibus.
          </p>
          <a
            href="https://www.inolib.com/"
            className="justify-center items-center buttonClass2 focus:outline-none my-6 focus:border-slate-700 focus:ring-2 focus:ring-slate-700 text-black w-[10rem] rounded h-[3rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex"
          >
            LEARN MORE
          </a>
        </article>
      </section>
    </>
  );
}
