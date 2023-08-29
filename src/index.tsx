import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";

const container = document.createElement("div");
document.body.appendChild(container);

const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
