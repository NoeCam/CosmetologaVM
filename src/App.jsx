import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NavBar from "./components/NavBar.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />

      <main className="flex-grow md:mt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
