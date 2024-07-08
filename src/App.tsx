// App.tsx
import  { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Contact from './components/pages/contact/Contact';
import Home from './components/pages/home/Home';
import Navbar from './components/pages/navbar/Navbar';
import Projects from './components/pages/projects/Projects';
import ScrollToTop from './components/pages/ScrollToTop';
import DetailedEnergy from './components/pages/services/detailed/DetailedEnergy';
import DetailedEngineering from './components/pages/services/detailed/DetailedEngineering';
import DetailedEnvironment from './components/pages/services/detailed/DetailedEnvironment';
import DetailedQuotations from './components/pages/services/detailed/DetailedQuotations';
import Services from './components/pages/services/Services';
import Spinner from './components/Spinner';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
      return () => window.removeEventListener('load', handlePageLoad);
    }
  }, []);

  return (
    <div>
      {loading && <Spinner />}
      {!loading && (
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route
              path="/services/engineering"
              element={<DetailedEngineering />}
            />
            <Route
              path="/services/environment"
              element={<DetailedEnvironment />}
            />
            <Route path="/services/energy" element={<DetailedEnergy />} />
            <Route
              path="/services/quotations"
              element={<DetailedQuotations />}
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
