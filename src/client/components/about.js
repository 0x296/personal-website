"use strict";

import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutContent = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

export const About = () => {
  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <AboutContent>
            <h1>Zinan Mu</h1>
            <h2>About Me</h2>
            <p>
              I am a second-year master’s student pursuing an M.S. in Computer Science at the School of Engineering, Vanderbilt University, with an expected graduation in May 2025.
            </p>
            <p>
              Prior to joining Vanderbilt, I earned a Bachelor of Engineering in Electronic Information Engineering from the College of Electrical Engineering at Zhejiang University. In addition, I obtained a Second Major Certificate in Computer Science and Technology from the same institution. During my undergraduate studies, I participated in the Asian Regional Contest of the International Collegiate Programming Contest (ICPC) at the Nanjing Site, where I was honored with a Gold Medal.
            </p>
            <p>
              My academic and professional interests lie in the development of web applications. I have contributed to several projects, including Architectura Sinica, News Sentiment Analyzer, and an Online Consultation Platform, gaining experience in both front-end and back-end technologies.
            </p>
            <p>
              You can view and download my detailed resume on the Resume page.
            </p>
          </AboutContent>
        </div>
      </div>
    </div>
  );
};
