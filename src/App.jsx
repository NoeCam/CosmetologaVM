//import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NavBar from "./components/NavBar.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import { Footer } from "./components/Footer.jsx";
import LogoCompany from "./components/LogoCompany.jsx";
import Button from "./components/Button.jsx";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <header className="p-4">
        <LogoCompany />
        <NavBar />
      </header>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Button text="probando-boton" />
        <Button text="otro-boton" />
      </main>
      <Footer />
    </>
  );
}

export default App;
