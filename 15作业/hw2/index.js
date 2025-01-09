import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // 导入 BrowserRouter
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
