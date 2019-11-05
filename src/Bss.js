import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Thread from "./components/Thread";

import "reset.css";
import "./Bss.css";

const Bss = () => (
  <BrowserRouter>
    <Header />
    <div className="wrapper">
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/thread" component={Thread} />
      </main>
    </div>
    <Footer />
  </BrowserRouter>
);

export default Bss;
