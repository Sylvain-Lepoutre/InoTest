import { useEffect, useRef } from "react";

import { useComposite } from "../Composite";

type CardSliderProps = {
  ariaLabel?: string;
  cardName?: string;
  imageSrc?: string;
  onButtonClick: (section: string) => void;
};

const CardSlider = (props: CardSliderProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  // const { addRef } = useComposite();

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

  // useEffect(() => {
  //   addRef(ref);
  // }, [addRef]);

  return (
    <article className="flex flex-col gap-2 items-center w-60">
      {/* <div className="w-40 h-56"> */}
        <img
          className="image image-animation w-60 h-56 object-cover object-center rounded-t"
          src={props.imageSrc || ""}
          draggable="false"
          alt=""
          role="presentation"
          aria-hidden="true"
        />
      {/* </div> */}
      <button
        aria-label={props.ariaLabel}
        className="buttonClass3 flex flex-col w-full rounded-b h-[4rem] transition ease-in-out delay-150 duration-300 justify-center items-center cursor-pointer focus-within:outline-red-500 hover:scale-110"
        onClick={handleButtonClick}
        ref={ref}
      >
        <h2>{props.cardName}</h2>
      </button>
    </article>
  );
};

export default CardSlider;
