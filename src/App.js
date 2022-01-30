import React from "react";
import Navbar from "./components/Navbar";
import Carousell from "./components/Carousell";
import './App.css';
import Banner from './components/Banner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Aboutus from './components/Aboutus'
import About from './components/About'
import Finance from './components/Finance'
import History from './components/History'
import Structure from './components/Structure'
import Partner from './components/Partner'
const App = () => {
  return (
    <>
    <Navbar/>
      <Partner/>
      <Footer/>
      </>
  );
};

export default App;
