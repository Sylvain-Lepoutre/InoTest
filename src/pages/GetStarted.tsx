import NavBar from "@components/header/NavBar";
import Stepper from "@components/UI/Stepper";

export default function GetStarted() {
  return (
    <>
      <header>
        <NavBar href="#main" />
      </header>

      <section className="">
        <Stepper
          container="flex justify-center align-center"
          href="/path1"
          style="flex justify-center align-center flex-col items-center rounded bg-[#151515] md:w-[40rem] p-4 m-8 md:h-[20rem] windowStyle"
          style2="text-center mt-4 text-white my-[5rem] windowStyle"
          style3="md:flex-row flex flex-col relative"
          styledButtons="px-4 py-2 mx-2 w-[8rem] my-1 rounded bg-white text-black buttonClass2"
          styledButtons2="px-4 py-2 w-[8rem] my-1 rounded bg-white text-black mt-2 bottom-[3.2rem] flex justify-center align-center buttonClass2"
          styledImage="hidden"
        />
      </section>
    </>
  );
}
