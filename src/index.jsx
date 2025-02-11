import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { ScrollProvider } from "../Context/scroll";
import Layout from "../components/Layout/Layout";
import BreedType from "../pages/BreedType";
import MoreInfo from "../pages/MoreInfo";
import Services from "../pages/Services";
import Confirmation from "../pages/Confirmation";
import Receipt from "../pages/Receipt";

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
            <Route path="/receipt" element={<Receipt />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScrollProvider>
      <App />
    </ScrollProvider>
  </StrictMode>
);
