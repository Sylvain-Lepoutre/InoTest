import NavBar from "@components/header/NavBar";
import { Link } from "react-router-dom";
import ImageSlider from "../components/UI/cardAnim";
import Modal from "@components/UI/cardModal";
import { useState } from "react";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(null); // État pour stocker l'élément sélectionné

  // Fonction pour ouvrir le Modal avec l'élément sélectionné
  const openModal = (item) => {
    setSelectedItem(item);
  };

  // Fonction pour fermer le Modal
  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <header>
        <NavBar href="#main" title="Inotest" />
      </header>

      <section className="md:grid md:grid-cols-2 md:grid-rows-2 md:justify-items-start h-[90vh]">
        <div className="h-[8rem] md:h-[35vh] flex flex-col items-center justify-center md:col-start-1 md:row-start-1 md:place-content-end">
          <h2 className="title md:max-w-min text-3xl md:block lg:block xl:block md:text-4xl xl:text-5xl lg:text-5xl md:ml-[35rem] lg:ml-[45rem] xl:mt-[-3.5rem] xl:ml-[59rem]">
            Accessibility Testing
          </h2>
        </div>
        <div className="md:mt-[5rem] mt-60 flex min-[1050px]:flex-row flex-col items-center gap-6 md:col-start-2 md:row-start-2">
          <Link
            to="/getstarted"
            className="bg-[#000] buttonClass text-white w-[15rem] rounded-lg h-[3rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center"
          >
            GET STARTED
          </Link>
          <a
            href="#main"
            className="bg-[#000] buttonClass text-white w-[15rem] rounded-lg h-[3rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center"
          >
            LEARN MORE
          </a>
        </div>
      </section>

      <section id="main">
        <div className="max-w-xl ml-5 p-6 mt-0 items-start">
          <h2 className="title text-3xl md:text-4xl xl:text-5xl lg:text-5xl">Accessible components library</h2>
          <p className="title mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptatibus deserunt perspiciatis odit
            maxime provident ratione nemo, recusandae quas consequatur sapiente fuga deleniti autem est? Eligendi
            eveniet neque asperiores.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center justify-end mt-auto">
        <div className="mt-28">
          <ImageSlider />
        </div>
      </section>

      {selectedItem && (
        <Modal item={selectedItem} closeModal={closeModal} />
      )}
    </>
  );
}
