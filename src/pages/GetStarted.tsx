import NavBar from "@components/NavBar";
import Stepper from "@components/Stepper";

export default function GetStarted() {
  return (
    <>
      <header>
        <NavBar />
        <Stepper
          style="flex flex-col items-center"
          style2="text-center mt-4"
          style3="mt-4"
          styledButtons="px-4 py-2 mr-2 rounded bg-black text-white"
        />
      </header>
    </>
  );
}
