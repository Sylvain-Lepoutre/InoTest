import { createBrowserRouter } from "react-router-dom";

import AboutUs from "@pages/AboutUs";
import ErrorPage from "@pages/ErrorPage";
import GetStarted from "@pages/GetStarted";
import Home from "@pages/Home";
import Path1 from "@pages/Path1";
import Path2 from "@pages/Path2";
import Root from "./routes/Root";

export const router = createBrowserRouter([
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
