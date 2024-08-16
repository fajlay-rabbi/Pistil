import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./gobal.scss";
import Provider from "./utils/Provider.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./libs/routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
