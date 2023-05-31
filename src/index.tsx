import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root";
import AboutUs from "@pages/AboutUs";
import Contact from "@pages/Contact";
import ErrorPage from "@pages/ErrorPage";
import GetStarted from "@pages/GetStarted";
import Path1 from "@pages/Path1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/getstarted",
    element: <GetStarted />,
  },
  {
    path: "/path1",
    element: <Path1 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
