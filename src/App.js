import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Testimonials/>
      <Demo/>
      {/* <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/testimonials" element={<Testimonials />} />
          <Route exact path="/demo" element={<Demo />} />
          {/* <Route exact path="/about" element={<about />} /> */}
        {/* </Routes> */}
      {/* </BrowserRouter> */} */
      <Footer />
    </div>
  );
}

export default App;
