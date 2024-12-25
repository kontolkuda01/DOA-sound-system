import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import AboutUs from "./sections/AboutUs";
import Products from "./sections/Products";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Products />
      <Contact />
      <Footer />
    </>
  );
}
