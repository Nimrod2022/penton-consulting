import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { CurrentPage } from "./shared/types";
import Home from "./pages/home/Home";
import Services from "./pages/home/Services";
import Projects from "./pages/home/Projects";
import Contact from "./shared/Contact";
import Navbar from "./pages/navbar/Navbar";

function App() {
  const [currentPage, setCurrentPage] = useState<CurrentPage>(CurrentPage.Home);

  return (
    <>
      <Router>
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Routes>
          <Route
            path="/"
            element={
              <Home currentPage={currentPage} setCurrentPage={setCurrentPage} />
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
