import Stepper from "@components/UI/Stepper";

export default function GetStarted() {
  return (
    <>
      <section className="h-[90vh]">
        <Stepper
          container="flex justify-center align-center p-2 mt-0"
          href="/path1"
          style="mt-20 md:mt-0 flex justify-center align-center flex-col items-center rounded-lg bg-[#151515] md:w-[40rem] p-4 mx-8 windowStyle"
          style2="text-center md:text-justify mt-4 text-white my-[1rem] windowStyle h-[15vh]"
          style3="mt-40 md:mt-0 md:flex-row flex flex-col relative"
          styledButtons="px-4 py-2 mx-2 w-[8rem] my-1 rounded bg-white text-black buttonClass2"
          styledImage="md:block hidden"
        />
      </section>
    </>
  );
}
