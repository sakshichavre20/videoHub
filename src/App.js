import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import React from "react";
import Videos from "./components/Videos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
