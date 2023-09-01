import { cleanup, prettyDOM, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";

import { Carousel } from "@components/sliderComponents/libraryComponents/Carousel/Carousel";

it("should only display one slide", () => {
  render(
    <Carousel data-testid="carousel">
      <Carousel.NavButton to="previous">Previous</Carousel.NavButton>

      <Carousel.SlideList>
        <Carousel.Slide>Slide 1</Carousel.Slide>
        <Carousel.Slide selected={true}>Slide 2</Carousel.Slide>
      </Carousel.SlideList>

      <Carousel.NavButton to="next">Next</Carousel.NavButton>
    </Carousel>
  );

  // console.log(prettyDOM(screen.getByTestId("carousel")));

  expect(screen.getByText("Slide 1")).not.toBeVisible();
  expect(screen.getByText("Slide 2")).toBeVisible();
});

it("should display the selected slide", () => {
  render(
    <Carousel>
      <Carousel.NavButton to="previous">Previous</Carousel.NavButton>

      <Carousel.SlideList>
        <Carousel.Slide>Slide 1</Carousel.Slide>
        <Carousel.Slide selected>Slide 2</Carousel.Slide>
      </Carousel.SlideList>

      <Carousel.NavButton to="next">Next</Carousel.NavButton>
    </Carousel>
  );

  expect(screen.getByText("Slide 2")).toBeVisible();
});

it("should display the previous slide when clicking on the `Previous` button", async () => {
  render(
    <Carousel>
      <Carousel.NavButton to="previous">Previous</Carousel.NavButton>

      <Carousel.SlideList>
        <Carousel.Slide>Slide 1</Carousel.Slide>
        <Carousel.Slide selected>Slide 2</Carousel.Slide>
      </Carousel.SlideList>

      <Carousel.NavButton to="next">Next</Carousel.NavButton>
    </Carousel>
  );

  const user = userEvent.setup();
  await user.click(screen.getByText("Previous"));

  expect(screen.getByText("Slide 1")).toBeVisible();
});

it("should display the previous slide when activating the `Previous` button with `Enter` or `Space` key", async () => {
  const user = userEvent.setup();

  for (const keyCode of ["Enter", "Space"] as const) {
    render(
      <Carousel>
        <Carousel.NavButton to="previous">Previous</Carousel.NavButton>

        <Carousel.SlideList>
          <Carousel.Slide>Slide 1</Carousel.Slide>
          <Carousel.Slide selected>Slide 2</Carousel.Slide>
        </Carousel.SlideList>

        <Carousel.NavButton to="next">Next</Carousel.NavButton>
      </Carousel>
    );

    await user.keyboard(`[Tab][${keyCode}]`);

    expect(screen.getByText("Slide 1")).toBeVisible();

    cleanup();
  }
});

it("should display the next slide when clicking on the `Next` button", async () => {
  render(
    <Carousel>
      <Carousel.NavButton to="previous">Previous</Carousel.NavButton>

      <Carousel.SlideList>
        <Carousel.Slide selected>Slide 1</Carousel.Slide>
        <Carousel.Slide>Slide 2</Carousel.Slide>
      </Carousel.SlideList>

      <Carousel.NavButton to="next">Next</Carousel.NavButton>
    </Carousel>
  );

  const user = userEvent.setup();
  await user.click(screen.getByText("Next"));

  expect(screen.getByText("Slide 2")).toBeVisible();
});

it("should display the next slide when activating the `Next` button with `Enter` or `Space` key", async () => {
  const user = userEvent.setup();

  for (const keyCode of ["Enter", "Space"] as const) {
    render(
      <Carousel>
        <Carousel.NavButton to="previous">Previous</Carousel.NavButton>

        <Carousel.SlideList>
          <Carousel.Slide selected>Slide 1</Carousel.Slide>
          <Carousel.Slide>Slide 2</Carousel.Slide>
        </Carousel.SlideList>

        <Carousel.NavButton to="next">Next</Carousel.NavButton>
      </Carousel>
    );

    await user.keyboard(`[Tab][Tab][${keyCode}]`);

    expect(screen.getByText("Slide 2")).toBeVisible();

    cleanup();
  }
});

it("should display the first slide when clicking on the `Previous` button", async () => {
  render(
    <Carousel>
      <Carousel.NavButton to="previous">Previous</Carousel.NavButton>

      <Carousel.SlideList>
        <Carousel.Slide selected>Slide 1</Carousel.Slide>
        <Carousel.Slide>Slide 2</Carousel.Slide>
      </Carousel.SlideList>

      <Carousel.NavButton to="next">Next</Carousel.NavButton>
    </Carousel>
  );

  const user = userEvent.setup();
  await user.click(screen.getByText("Previous"));

  expect(screen.getByText("Slide 1")).toBeVisible();
});

it("should display the first slide when activating the `Previous` button with `Enter` or `Space` key", async () => {
  const user = userEvent.setup();

  for (const keyCode of ["Enter", "Space"] as const) {
    render(
      <Carousel>
        <Carousel.NavButton to="previous">Previous</Carousel.NavButton>

        <Carousel.SlideList>
          <Carousel.Slide selected>Slide 1</Carousel.Slide>
          <Carousel.Slide>Slide 2</Carousel.Slide>
        </Carousel.SlideList>

        <Carousel.NavButton to="next">Next</Carousel.NavButton>
      </Carousel>
    );

    await user.keyboard(`[Tab][${keyCode}]`);

    expect(screen.getByText("Slide 1")).toBeVisible();

    cleanup();
  }
});

it("should display the last slide when clicking on the `Next` button", async () => {
  render(
    <Carousel>
      <Carousel.NavButton to="previous">Previous</Carousel.NavButton>

      <Carousel.SlideList>
        <Carousel.Slide>Slide 1</Carousel.Slide>
        <Carousel.Slide selected>Slide 2</Carousel.Slide>
      </Carousel.SlideList>

      <Carousel.NavButton to="next">Next</Carousel.NavButton>
    </Carousel>
  );

  const user = userEvent.setup();
  await user.click(screen.getByText("Next"));

  expect(screen.getByText("Slide 2")).toBeVisible();
});

it("should display the last slide when activating the `Next` button with `Enter` or `Space` key", async () => {
  const user = userEvent.setup();

  for (const keyCode of ["Enter", "Space"] as const) {
    render(
      <Carousel>
        <Carousel.NavButton to="previous">Previous</Carousel.NavButton>

        <Carousel.SlideList>
          <Carousel.Slide>Slide 1</Carousel.Slide>
          <Carousel.Slide selected>Slide 2</Carousel.Slide>
        </Carousel.SlideList>

        <Carousel.NavButton to="next">Next</Carousel.NavButton>
      </Carousel>
    );

    await user.keyboard(`[Tab][Tab][${keyCode}]`);

    expect(screen.getByText("Slide 2")).toBeVisible();

    cleanup();
  }
});

it("should display the last slide when clicking on the `Previous` button", async () => {
  render(
    <Carousel infinite>
      <Carousel.NavButton to="previous">Previous</Carousel.NavButton>

      <Carousel.SlideList>
        <Carousel.Slide selected>Slide 1</Carousel.Slide>
        <Carousel.Slide>Slide 2</Carousel.Slide>
      </Carousel.SlideList>

      <Carousel.NavButton to="next">Next</Carousel.NavButton>
    </Carousel>
  );

  const user = userEvent.setup();
  await user.click(screen.getByText("Previous"));

  expect(screen.getByText("Slide 2")).toBeVisible();
});

it("should display the last slide when activating the `Previous` button with `Enter` or `Space` key", async () => {
  const user = userEvent.setup();

  for (const keyCode of ["Enter", "Space"] as const) {
    render(
      <Carousel infinite>
        <Carousel.NavButton to="previous">Previous</Carousel.NavButton>

        <Carousel.SlideList>
          <Carousel.Slide selected>Slide 1</Carousel.Slide>
          <Carousel.Slide>Slide 2</Carousel.Slide>
        </Carousel.SlideList>

        <Carousel.NavButton to="next">Next</Carousel.NavButton>
      </Carousel>
    );

    await user.keyboard(`[Tab][${keyCode}]`);

    expect(screen.getByText("Slide 2")).toBeVisible();

    cleanup();
  }
});

it("should display the first slide when clicking on the `Next` button", async () => {
  render(
    <Carousel infinite>
      <Carousel.NavButton to="previous">Previous</Carousel.NavButton>

      <Carousel.SlideList>
        <Carousel.Slide>Slide 1</Carousel.Slide>
        <Carousel.Slide selected>Slide 2</Carousel.Slide>
      </Carousel.SlideList>

      <Carousel.NavButton to="next">Next</Carousel.NavButton>
    </Carousel>
  );

  const user = userEvent.setup();
  await user.click(screen.getByText("Next"));

  expect(screen.getByText("Slide 1")).toBeVisible();
});

it("should display the first slide when activating the `Next` button with `Enter` or `Space` key", async () => {
  const user = userEvent.setup();

  for (const keyCode of ["Enter", "Space"] as const) {
    render(
      <Carousel infinite>
        <Carousel.NavButton to="previous">Previous</Carousel.NavButton>

        <Carousel.SlideList>
          <Carousel.Slide>Slide 1</Carousel.Slide>
          <Carousel.Slide selected>Slide 2</Carousel.Slide>
        </Carousel.SlideList>

        <Carousel.NavButton to="next">Next</Carousel.NavButton>
      </Carousel>
    );

    await user.keyboard(`[Tab][Tab][${keyCode}]`);

    expect(screen.getByText("Slide 1")).toBeVisible();

    cleanup();
  }
});
