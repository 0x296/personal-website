"use strict";

import React from "react";
import styled from "styled-components";

const LandingBase = styled.div`
  display: block;
  justify-content: center;
  grid-area: main;
`;

export const Landing = () => (
  <LandingBase>
    <h1>This is my landing page!</h1>
  </LandingBase>
);
