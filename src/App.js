import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Store from './pages/Store';
import Cards from './pages/Cards';
import Aboutus from './pages/Aboutus';
import ContactUs from './pages/ContactUs';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
