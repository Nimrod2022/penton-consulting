import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { CurrentPage } from "./shared/types";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Navbar from "./pages/navbar/Navbar";
import { UseSelector, useSelector } from "react-redux";
import { RootState } from "./app/store";

function App() {
  const currentPage = useSelector((state: RootState) => state.page.page)

  return (
    <>
      <Router>
        <Navbar currentPage={currentPage}  />
        <Routes>
          <Route
            path="/"
            element={
              <Home currentPage={currentPage} />
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
