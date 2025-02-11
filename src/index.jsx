import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../components/Layout/Layout";
import BreedType from "../pages/BreedType";
import MoreInfo from "../pages/MoreInfo";
import Services from "../pages/Services";
import Confirmation from "../pages/Confirmation";
import NextSteps from "../pages/NextSteps";
import { RadioProvider } from "../Context/radio";
import { ScrollProvider } from "../Context/scroll";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<BreedType />} />
            <Route path="/moreinfo" element={<MoreInfo />} />
            <Route path="/services" element={<Services />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/nextsteps" element={<NextSteps />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScrollProvider>
      <RadioProvider>
        <App />
      </RadioProvider>
    </ScrollProvider>
  </StrictMode>
);
