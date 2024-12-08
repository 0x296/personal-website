"use strict";

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import md5 from "md5";


const HeaderBase = styled.div`
  grid-area: hd;
  display: flex;
  background: #000;
`;

export const Header = () => (
  <HeaderBase>
    Header
  </HeaderBase>
);

Header.propTypes = {
  user: PropTypes.string,
  email: PropTypes.string,
};
