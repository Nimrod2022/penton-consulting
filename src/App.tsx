import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Contact from './components/pages/contact/Contact';
import Home from './components/pages/home/Home';
import Navbar from './components/pages/navbar/Navbar';
import Projects from './components/pages/projects/Projects';
import ScrollToTop from './components/pages/ScrollToTop';
import Services from './components/pages/services/Services';
import DetailedEngineering from './components/pages/services/detailed/DetailedEngineering';
import DetailedEnvironment from './components/pages/services/detailed/DetailedEnvironment';
import DetailedEnergy from './components/pages/services/detailed/DetailedEnergy';
import DetailedQuotations from './components/pages/services/detailed/DetailedQuotations';

function App() {
  // const currentPage = useSelector((state: RootState) => state.page.page);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/engineering" element={<DetailedEngineering />} />
        <Route path="/services/environment" element={<DetailedEnvironment />} />
        <Route path="/services/energy" element={<DetailedEnergy />} />
        <Route path="/services/quotations" element={<DetailedQuotations/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
