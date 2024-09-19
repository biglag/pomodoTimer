import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./layout";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>,
);
