import { useRef, useEffect, MouseEvent, TouchEvent } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

const ImageSlider = () => {
  const { t } = useTranslation();
  i18n.language;
  const trackRef = useRef<HTMLElement>(null);
  const prevPercentageRef = useRef<number>(0);
  const mouseDownAtRef = useRef<number>(0);
  const minPercentage = -100;
  const maxPercentage = 0;

  useEffect(() => {
    const handleOnDown = (e: MouseEvent) => {
      mouseDownAtRef.current = e.clientX;
    };

    prevPercentageRef.current = -50;

    const handleOnUp = () => {
      mouseDownAtRef.current = 0;
      prevPercentageRef.current = parseFloat(trackRef.current?.dataset.percentage || "0");
    };

    const handleOnMove = (e: MouseEvent) => {
      if (mouseDownAtRef.current === 0) return;

      const mouseDelta = parseFloat(mouseDownAtRef.current) - e.clientX;
      const maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained = parseFloat(prevPercentageRef.current) + percentage;
      let nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, maxPercentage), minPercentage);

      if (nextPercentage < minPercentage || nextPercentage > maxPercentage) {
        const overflow = Math.abs(nextPercentage) - 100;
        nextPercentage = nextPercentage < minPercentage ? maxPercentage + overflow : minPercentage - overflow;
      }

      trackRef.current.dataset.percentage = nextPercentage.toString();

      trackRef.current.style.transform = `translate(${nextPercentage}%, -50%)`;

      const images = trackRef.current?.getElementsByClassName("image");
      for (const image of Array.from(images)) {
        image.setAttribute("style", `object-position: ${100 + nextPercentage}% center`);
      }
    };

    window.addEventListener("mousedown", handleOnDown);
    window.addEventListener("touchstart", (e: TouchEvent) => handleOnDown(e.touches[0]));
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("touchend", (e: TouchEvent) => handleOnUp(e.touches[0]));
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("touchmove", (e: TouchEvent) => handleOnMove(e.touches[0]));

    return () => {
      window.removeEventListener("mousedown", handleOnDown);
      window.removeEventListener("touchstart", (e: TouchEvent) => handleOnDown(e.touches[0]));
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("touchend", (e: TouchEvent) => handleOnUp(e.touches[0]));
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchmove", (e: TouchEvent) => handleOnMove(e.touches[0]));
    };
  }, [minPercentage]);

  return (
    <section
      id="image-track"
      data-mouse-down-at="0"
      data-prev-percentage="0"
      ref={trackRef}
      className="flex gap-4vmin left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none overflow-hidden h-fit"
    >
      <div className="flex flex-col gap-2 items-center">
        <div className="w-40 h-56">
          <img
            className="image image-animation w-40 h-56 object-cover object-center rounded-b"
            src="https://images.unsplash.com/photo-1524146128017-b9dd0bfd2778?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF2aWdhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            draggable="false"
            alt="Slider 1"
          />
        </div>
        <Link
          to="/path1"
          className="buttonClass3 flex flex-col w-full rounded-b h-[4rem] transition ease-in-out delay-150 duration-300 justify-center items-center cursor-pointer"
        >
          <h2>{t("nav")}</h2>
        </Link>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="w-40 h-56">
          <img
            className="image image-animation w-40 h-56 object-cover object-center rounded-t"
            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
            draggable="false"
            alt="Slider 2"
          />
        </div>
        <Link
          to="/path1"
          className="buttonClass3 flex flex-col w-full rounded-b h-[4rem] transition ease-in-out delay-150 duration-300 justify-center items-center cursor-pointer"
        >
          <h2>Image</h2>
        </Link>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="w-40 h-56">
          <img
            className="image image-animation w-40 h-56 object-cover object-center rounded-t"
            src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0aWNsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            draggable="false"
            alt="Slider 3"
          />
        </div>
        <Link
          to="/path1"
          className="buttonClass3 flex flex-col w-full rounded-b h-[4rem] transition ease-in-out delay-150 duration-300 justify-center items-center cursor-pointer"
        >
          <h2>Article</h2>
        </Link>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="w-40 h-56">
          <img
            className="image image-animation w-40 h-56 object-cover object-center rounded-t"
            src="https://images.unsplash.com/photo-1502101872923-d48509bff386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3RlcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            draggable="false"
            alt="Slider 4"
          />
        </div>
        <Link
          to="/path1"
          className="buttonClass3 flex flex-col w-full rounded-b h-[4rem] transition ease-in-out delay-150 duration-300 justify-center items-center cursor-pointer"
        >
          <h2>Stepper</h2>
        </Link>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="w-40 h-56">
          <img
            className="image image-animation w-40 h-56 object-cover object-center rounded-t"
            src="https://images.unsplash.com/photo-1579444741963-5ae219cfe27c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ybXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            draggable="false"
            alt="Slider 5"
          />
        </div>
        <Link
          to="/path1"
          className="buttonClass3 flex flex-col w-full rounded-b h-[4rem] transition ease-in-out delay-150 duration-300 justify-center items-center cursor-pointer"
        >
          <h2>{t("form")}</h2>
        </Link>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="w-40 h-56">
          <img
            className="image image-animation w-40 h-56 object-cover object-center rounded-t"
            src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80"
            draggable="false"
            alt="Slider 6"
          />
        </div>
        <Link
          to="/"
          className="buttonClass3 flex flex-col w-full rounded-b h-[4rem] transition ease-in-out delay-150 duration-300 justify-center items-center cursor-pointer"
        >
          <h2>{t("coming")}</h2>
          <p>{t("soon")}</p>
        </Link>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="w-40 h-56">
          <img
            className="image image-animation w-40 h-56 object-cover object-center rounded-t"
            src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80"
            draggable="false"
            alt="Slider 7"
          />
        </div>
        <Link
          to="/"
          className="buttonClass3 flex flex-col w-full rounded-b h-[4rem] transition ease-in-out delay-150 duration-300 justify-center items-center cursor-pointer"
        >
          <h2>{t("coming")}</h2>
          <p>{t("soon")}</p>
        </Link>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="w-40 h-56">
          <img
            className="image image-animation w-40 h-56 object-cover object-center rounded-t"
            src="https://images.unsplash.com/photo-1682686581556-a3f0ee0ed556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            draggable="false"
            alt="Slider 8"
          />
        </div>
        <Link
          to="/"
          className="buttonClass3 flex flex-col w-full rounded-b h-[4rem] transition ease-in-out delay-150 duration-300 justify-center items-center cursor-pointer"
        >
          <h2>{t("coming")}</h2>
          <p>{t("soon")}</p>
        </Link>
      </div>
    </section>
  );
};

export default ImageSlider;
