import NavBar from "@components/NavBar";
import FakeArticle from "@components/fakeComponents/FakeArticle";
import FakeNavBar from "@components/fakeComponents/FakeNavBar";
import { Link } from "react-router-dom";

export default function Path1() {
  return (
    <>
      <section>
        <header>
          <NavBar />
        </header>

          <section className="overflow-auto mx-2 sm:mx-16 mb-6 h-[32rem] rounded shadow-lg md:mt-[1rem] windowStyle">
            <FakeNavBar />
            <FakeArticle 
              title="Ceci est une fausse page"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac interdum lectus, 
              vitae tempus arcu. Donec molestie nisi diam, sed mattis dui volutpat eu. Pellentesque 
              hendrerit nisl vitae mollis rhoncus. Suspendisse sed dolor in dui bibendum rhoncus ac quis odio. 
              Suspendisse tempor odio eu aliquet ultrices. Sed venenatis, metus a euismod sagittis, neque lectus 
              fringilla purus, non vehicula odio risus vel ante. Duis eget velit a metus egestas vestibulum."
              imageSrcTop="/public/fake-1.jpg"
              imageSrcBottom="/public/fake-2.jpg"
              style="windowStyle md:mt-0 mt-44"
              styleContainer="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8"
              styleSubContainer="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20"
              styleImageContainer="pr-12 sm:pr-0"
              styleTextContainer="windowStyle"
              styleImage="relative max-w-xs mb-12 mt-8"
              styleImageTop="hidden md:block object-bottom rounded-md scale-75 object-cover h-[25rem]"
              styleImageBottom="absolute origin-bottom-right scale-75 rounded-md -bottom-6 md:-bottom-12 md:-right-12"
              styleTitle="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
              styleContent="mt-8 text-base leading-relaxed"
            />
            <FakeArticle 
              title="Ceci est une fausse page"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac interdum lectus, 
              vitae tempus arcu. Donec molestie nisi diam, sed mattis dui volutpat eu. Pellentesque 
              hendrerit nisl vitae mollis rhoncus. Suspendisse sed dolor in dui bibendum rhoncus ac quis odio. 
              Suspendisse tempor odio eu aliquet ultrices. Sed venenatis, metus a euismod sagittis, neque lectus 
              fringilla purus, non vehicula odio risus vel ante. Duis eget velit a metus egestas vestibulum."
              imageSrcTop="/public/fake-3.jpg"
              imageSrcBottom="/public/fake-4.jpg"
              style="windowStyle py-8 md:mt-0 mt-44"
              styleContainer="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8"
              styleSubContainer="grid items-center md:grid-cols-2 md:grid-row-1 gap-y-10 md:gap-x-20"
              styleImageContainer="pr-12 sm:pr-0 md:col-start-2"
              styleTextContainer="md:row-start-1 windowStyle "
              styleImage="relative max-w-xs mb-12"
              styleImageTop="hidden md:block object-bottom rounded-md scale-75 object-cover h-[25rem]"
              styleImageBottom="absolute origin-bottom-right scale-75 rounded-md -bottom-12 md:-right-12"
              styleTitle="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
              styleContent="mt-8 text-base leading-relaxed"
            />
          </section>

          <section className="md:grid md:grid-cols-2 md:justify-items-end flex justify-center h-fit">
            <Link
              to="/path2"
              className="md:col-start-2 buttonClass w-[15rem] rounded-lg h-[3rem] md:mr-8 md:row-start-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center"
            >
              Next
            </Link>
          </section>
      </section>
    </>
  );
}
