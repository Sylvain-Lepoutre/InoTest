import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root";
import AboutUs from "@pages/AboutUs";
import ErrorPage from "@pages/ErrorPage";
import GetStarted from "@pages/GetStarted";
import Path1 from "@pages/Path1";
import Path2 from "@pages/Path2";
import Home from "@pages/Home";

const container = document.createElement("div");
document.body.appendChild(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/getstarted",
        element: <GetStarted />,
      },
      {
        path: "/path1",
        element: <Path1 />,
      },
      {
        path: "/path2",
        element: <Path2 />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
