import React from "react";
import Navbar from "./components/Navbar";
import Carousell from "./components/Carousell";
import './App.css';
import Banner from './components/Banner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Aboutus from './components/Aboutus'
const App = () => {
  return (
    <>
      <Navbar />
      <Carousell />
      <Aboutus />
      <Banner />
      <Contact />
      <Footer />
      </>
  );
};

export default App;
