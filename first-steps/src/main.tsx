import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FirstStepsApp } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FirstStepsApp />
    {/* <MyAwesomeApp /> */}
  </StrictMode>,
);
