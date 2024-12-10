"use strict";

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./components/header.js";
import { Resume } from "./components/resume.js";
import { About } from "./components/about.js";
import { GlobalStyle} from './components/GlobalStyle.js';
/***
 * Main application entry point
 * @returns {JSX.Element}
 * @constructor
 */
const MyApp = () => {
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <div className="container-fluid p-0">
        <Header />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("mainDiv"));
root.render(<MyApp />);
