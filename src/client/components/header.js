"use strict";

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import md5 from "md5";

const fontColor = "#ffffff";
const HeaderLeftBase = styled.div`
  flex-grow: 1;
  & > h2 {
    color: white;
    margin: 0.75em 0.5em 0.75em 0.5em;
  }  
`

const HeaderBase = styled.div`
  grid-area: hd;
  display: flex;
  background: #000;
`;

export const Header = () => (
  <HeaderBase>
    <HeaderLeftBase>
      <h2>Zinan Mu</h2>
    </HeaderLeftBase>
  </HeaderBase>
);

