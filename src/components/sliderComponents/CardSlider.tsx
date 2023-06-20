import React from "react";

type CardSliderProps = {
  imageSrc?: string;
  cardName?: string;
  onButtonClick: (section: string) => void;
};

const CardSlider: React.FC<CardSliderProps> = (props) => {
  const handleButtonClick = () => {
    props.onButtonClick(props.cardName || "");
    scrollDown();
  };

  const scrollDown = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <article className="flex flex-col gap-2 items-center">
      <div className="w-40 h-56">
        <img
          className="image image-animation w-40 h-56 object-cover object-center rounded-t"
          src={props.imageSrc || ""}
          draggable="false"
          alt=""
          role="presentation"
          aria-hidden="true"
        />
      </div>
      <button
        onClick={handleButtonClick}
        className="buttonClass3 flex flex-col w-full rounded-b h-[4rem] transition ease-in-out delay-150 duration-300 justify-center items-center cursor-pointer"
      >
        <h2>{props.cardName}</h2>
      </button>
    </article>
  );
};

export default CardSlider;
