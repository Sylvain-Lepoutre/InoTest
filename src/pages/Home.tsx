import Nav from "@components/Nav";

export default function Home() {
  return (
    <>
      <header>
        <Nav title="InoBox" />
      </header>
      <div className="flex flex-col lg:justify-between items-center justify-center lg:items-start">
        <h2 className=" md:max-w-min text-3xl md:block lg:block xl:block md:text-4xl xl:text-5xl lg:text-5xl md:ml-[35rem] lg:ml-[45rem] xl:mt-[-3.5rem] xl:ml-[59rem]">
          Accessibility Testing
        </h2>
      </div>
      <section className="md:grid md:grid-cols-2 md:grid-rows-2 md:mt-32 flex justify-center w-screen mt-60">
        <button className="bg-black text-white w-[15rem] rounded-lg h-[3rem] md:col-start-2 md:row-start-2 transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-110 duration-300">
          GET STARTED
        </button>
      </section>
    </>
  );
}
