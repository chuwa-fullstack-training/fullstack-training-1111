import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.js";
import { Provider } from "react-redux";
import store from "./store/toolkitIndex.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
);
