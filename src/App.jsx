import React from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Content from "./components/content/Content"
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="w-full md:w-[100%] sm:w-[100%] lg:w-[80%] lg:m-auto h-[100%] bg-[#09090B] text-white">
      <Navbar/>
      <Hero/>
      <Content/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
