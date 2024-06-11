import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Navbar from './pages/navbar/Navbar';
import Projects from './pages/projects/Projects';
import Services from './pages/services/Services';
import ScrollToTop from './components/ScrollToTop';

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
    </Router>
  );
}

export default App;
