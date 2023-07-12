import {
  createContext,
  useCallback,
  useEffect,
  useState,
  type Dispatch,
  type HTMLAttributes,
  type SetStateAction,
} from "react";

import { NavButton, type NavButtonRef, type NavButtonTo } from "./NavButton";
import { Slide, type SlideState } from "./Slide";
import { SlideList } from "./SlideList";

type Props = HTMLAttributes<HTMLDivElement> & {
  infinite?: boolean | undefined;
};

type State = {
  previousButtonRef: NavButtonRef | undefined;
  nextButtonRef: NavButtonRef | undefined;
  slides: SlideState[];
};

export const SetStateContext = createContext<Dispatch<SetStateAction<State>>>(() => undefined);

export const Carousel = ({ children, infinite = false, ...rest }: Props) => {
  const [state, setState] = useState<State>({
    previousButtonRef: undefined,
    nextButtonRef: undefined,
    slides: [],
  });

  const selectPreviousSlide = useCallback(() => {
    const index = state.slides.findIndex((slide) => slide.selected);

    if (index > 0) {
      setState((prevState) => ({
        ...prevState,
        slides: [
          ...prevState.slides.slice(0, index - 1),
          { ref: prevState.slides[index - 1].ref, selected: true },
          { ref: prevState.slides[index].ref, selected: false },
          ...prevState.slides.slice(index + 1),
        ],
      }));
    } else if (infinite) {
      setState((prevState) => ({
        ...prevState,
        slides: [
          { ref: prevState.slides[0].ref, selected: false },
          ...prevState.slides.slice(1, -1),
          { ref: prevState.slides[prevState.slides.length - 1].ref, selected: true },
        ],
      }));
    }
  }, [infinite, state.slides]);

  const selectNextSlide = useCallback(() => {
    const index = state.slides.findIndex((slide) => slide.selected);

    if (index < state.slides.length - 1) {
      setState((prevState) => ({
        ...prevState,
        slides: [
          ...prevState.slides.slice(0, index),
          { ref: prevState.slides[index].ref, selected: false },
          { ref: prevState.slides[index + 1].ref, selected: true },
          ...prevState.slides.slice(index + 2),
        ],
      }));
    } else if (infinite) {
      setState((prevState) => ({
        ...prevState,
        slides: [
          { ref: prevState.slides[0].ref, selected: true },
          ...prevState.slides.slice(1, -1),
          { ref: prevState.slides[prevState.slides.length - 1].ref, selected: false },
        ],
      }));
    }
  }, [infinite, state.slides]);

  const handleNavButtonClick = useCallback(
    (event: MouseEvent, to: NavButtonTo) => {
      if (event.detail > 0 && event.button === 0) {
        if (to === "previous") {
          selectPreviousSlide();
        } else if (to === "next") {
          selectNextSlide();
        }
      }
    },
    [selectNextSlide, selectPreviousSlide]
  );

  const handleNavButtonKeyDown = useCallback(
    (event: KeyboardEvent, to: NavButtonTo) => {
      if (event.code === "Enter" || event.code === "Space") {
        if (to === "previous") {
          selectPreviousSlide();
        } else if (to === "next") {
          selectNextSlide();
        }
      }
    },
    [selectNextSlide, selectPreviousSlide]
  );

  useEffect(() => {
    const handlePreviousButtonClick = (event: MouseEvent) => handleNavButtonClick(event, "previous");
    const handleNextButtonClick = (event: MouseEvent) => handleNavButtonClick(event, "next");

    const handlePreviousButtonKeyDown = (event: KeyboardEvent) => handleNavButtonKeyDown(event, "previous");
    const handleNextButtonKeyDown = (event: KeyboardEvent) => handleNavButtonKeyDown(event, "next");

    state.previousButtonRef?.current?.addEventListener("click", handlePreviousButtonClick);
    state.nextButtonRef?.current?.addEventListener("click", handleNextButtonClick);

    state.previousButtonRef?.current?.addEventListener("keydown", handlePreviousButtonKeyDown);
    state.nextButtonRef?.current?.addEventListener("keydown", handleNextButtonKeyDown);

    for (const slide of state.slides) {
      if (slide.ref.current !== null) {
        slide.ref.current.style.display = slide.selected ? "" : "none";
      }
    }

    return () => {
      state.previousButtonRef?.current?.removeEventListener("click", handlePreviousButtonClick);
      state.nextButtonRef?.current?.removeEventListener("click", handleNextButtonClick);

      state.previousButtonRef?.current?.removeEventListener("keydown", handlePreviousButtonKeyDown);
      state.nextButtonRef?.current?.removeEventListener("keydown", handleNextButtonKeyDown);
    };
  }, [handleNavButtonClick, handleNavButtonKeyDown, state.nextButtonRef, state.previousButtonRef, state.slides]);

  return (
    <div {...rest}>
      <SetStateContext.Provider value={setState}>{children}</SetStateContext.Provider>
    </div>
  );
};

Carousel.NavButton = NavButton;
Carousel.Slide = Slide;
Carousel.SlideList = SlideList;
