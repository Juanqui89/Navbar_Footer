import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "./Views/Home";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          
          <Route path="#" element={<Home />} />
          <Route path="#" element={""} />
          <Route path="#" element={""} />
          <Route path="*" element={"404 Error Page Not Found"} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rutas;
