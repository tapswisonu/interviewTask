import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './mainLayout/Layout';
import Testimonials from './pages/Testimonials/Testimonials';
import HeroSection from './pages/heroSection/HeroSection';
import ContactUs from './pages/contactUs/ContactUs';
import AboutUs from './pages/aboutUs/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HeroSection />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Route>
      </Routes>

      {/* <HeroSection /> */}
    </BrowserRouter>
  );
}

export default App;
