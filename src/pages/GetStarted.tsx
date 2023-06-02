import NavBar from "@components/NavBar";
import Stepper from "@components/Stepper";

export default function GetStarted() {
  return (
    <>
      <header>
        <NavBar />
        <Stepper
          container="flex justify-center align-center h-screen relative"
          href="/path1"
          style="flex justify-center align-center flex-col items-center rounded windowStyle md:w-[40rem] p-4 m-8 md:h-[20rem]"
          style2="text-center mt-4 windowStyle my-[5rem]"
          style3="md:flex-row flex flex-col relative"
          styledButtons="px-4 py-2 mx-2 w-[8rem] my-1 rounded button2Class"
          styledButtons2="px-4 py-2 w-[8rem] my-1 rounded button2Class absolute bottom-[3.2rem] flex justify-center align-center"
          styledImage="hidden"
        />
      </header>
    </>
  );
}
