"use strict";

import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import styled from "styled-components";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/header.js";
import { Landing } from "./components/landing.js";


const GridBase = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "hd"
    "main"
    "ft";

  @media (min-width: 500px) {
    grid-template-columns: 40px 50px 1fr 50px 40px;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "hd hd hd hd hd"
      "sb sb main main main"
      "ft ft ft ft ft";
  }
`;



/***
 * Main application entry point
 * @returns {JSX.Element}
 * @constructor
 */
const MyApp = () => {
  return (
    <BrowserRouter>
      <GridBase>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Landing />} />
        </Routes>
      </GridBase>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("mainDiv"));
root.render(<MyApp />);
