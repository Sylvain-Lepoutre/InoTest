import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";

import { Carousel } from "@components/sliderComponents/libraryComponents/Carousel/Carousel";

it("should have the `button` role", () => {
  render(<Carousel.NavButton />);

  expect(screen.getByRole("button")).toBeInTheDocument();
});
