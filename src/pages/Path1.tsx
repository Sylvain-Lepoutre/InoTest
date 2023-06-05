import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '@components/NavBar';
import FakeArticle from '@components/fakeComponents/FakeArticle';
import FakeStepper from '@components/fakeComponents/FakeStepper';
import FakeNavBar from '@components/fakeComponents/FakeNavBar';
import FakeForm from '@components/fakeComponents/FakeForm';

export default function Path1() {
  const [activeStep2, setActiveStep2] = useState<number>(0);

  return (
    <>
      <section>
        <header>
          <NavBar />
        </header>

        <section className="overflow-auto mx-2 sm:mx-16 mb-6 xl:h-[25rem] 2xl:h-[32rem] rounded shadow-lg md:mt-[1rem] windowStyle">
          <FakeNavBar
            activeStep2={activeStep2}
            setActiveStep2={setActiveStep2}
          />
          {activeStep2 === 0 ? (
            <>
            <FakeArticle
              title="This is a testing zone"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac interdum lectus, vitae tempus arcu. Donec molestie nisi diam, sed mattis dui volutpat eu. Pellentesque hendrerit nisl vitae mollis rhoncus. Suspendisse sed dolor in dui bibendum rhoncus ac quis odio. Suspendisse tempor odio eu aliquet ultrices. Sed venenatis, metus a euismod sagittis, neque lectus fringilla purus, non vehicula odio risus vel ante. Duis eget velit a metus egestas vestibulum."
              imageSrcTop="/fake-1.jpg"
              imageSrcBottom="/fake-2.jpg"
              style="windowStyle md:mt-0 mt-12"
              styleContainer="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8"
              styleSubContainer="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20 mt-8"
              styleImageContainer="md:pr-12 pr-0 md:block flex flex-col items-center"
              styleTextContainer="windowStyle"
              styleImage="relative max-w-xs mb-12 mt-8"
              styleImageTop="hidden md:block object-bottom rounded-md scale-75 object-cover h-[25rem]"
              styleImageBottom="md:absolute md:origin-bottom-right scale-100 md:scale-75 rounded -bottom-6 md:-bottom-12 md:-right-12"
              styleTitle="text-3xl text-center md:text-left font-bold leading-tight sm:text-4xl lg:text-5xl"
              styleContent="mt-8 md:text-base leading-relaxed"
            />
          
            <FakeStepper
              container="flex justify-center bg-white align-center relative top-60"
              style="md:grid md:grid-cols-3 md:grid-rows-1 md:gap-0 gap-2 flex flex-col justify-center align-center bg-white items-center rounded md:w-[40rem] p-4 m-8 md:h-[20rem] burgerStyle2"
              style2="md:col-start-2 md:row-start-1 flex flex-col title text-center text-lg gap-2 font-bold"
              styledButtons="md:col-start-1 md:row-start-1 md:place-self-center px-4 py-2 w-[4rem] rounded text-3xl buttonClass"
              styledButtons2="md:col-start-3 md:row-start-1 md:place-self-center px-4 py-2 w-[4rem] rounded text-3xl buttonClass"
              styledImage="scale-100 rounded shadow-lg"
            />
            </>
            ) :
            <section className="flex flex-row gap-12 justify-center items-center mt-10 p-6">
              <FakeForm />
              <img src="/contact-1.jpg" className="md:block hidden max-w-md mb-12 mt-8 shadow rounded" />
            </section>
            }
        </section>

        <section className="md:grid md:grid-cols-2 md:justify-items-end flex justify-center h-fit">
          <Link
            to="/path2"
            className="md:col-start-2 buttonClass w-[15rem] rounded-lg xl:h-[2rem] 2xl:h-[3rem] md:mr-8 md:row-start-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center"
          >
            Next
          </Link>
        </section>
      </section>
    </>
  );
}
