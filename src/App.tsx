import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/pages/ScrollToTop';
import Contact from './components/pages/contact/Contact';
import Home from './components/pages/home/Home';
import Navbar from './components/pages/navbar/Navbar';
import Projects from './components/pages/projects/Projects';
import Services from './components/pages/services/Services';


function App() {
  // const currentPage = useSelector((state: RootState) => state.page.page);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
