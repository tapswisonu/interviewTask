import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './mainLayout/Layout';
import Testimonials from './pages/Testimonials/Testimonials';
import HeroSection from './pages/heroSection/HeroSection';
import AboutUs from "./pages/aboutUs/AboutUs";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ContactUs from "./pages/contactUs/ContactUs";
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HeroSection />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="testimonials" element={<Testimonials />} />
          </Route>
        </Routes>
      </BrowserRouter>
         */}
      <AnimatePresence mode="wait">
        <Header />
     
          <HeroSection />
          <AboutUs />
          <Testimonials />
          <ContactUs />
      
        <Footer />
      </AnimatePresence>
    </>
  );
}

export default App;
