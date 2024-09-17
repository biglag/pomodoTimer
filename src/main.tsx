import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app/App";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
