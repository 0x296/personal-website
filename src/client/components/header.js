"use strict";

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderBase = styled.header`
  background: #000;
  color: white;
  padding: 1em 0;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2em;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1em;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Header = () => (
  <HeaderBase>
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <HeaderContent>
            <h2>Zinan Mu</h2>
            <NavLinks>
              <Link to="/about"><strong>About</strong></Link>
              <Link to="/resume"><strong>Resume</strong></Link>
            </NavLinks>
          </HeaderContent>
        </div>
      </div>
    </div>
  </HeaderBase>
);
