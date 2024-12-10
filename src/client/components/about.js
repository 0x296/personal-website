"use strict";

import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

// Styled Components
const AboutContainer = styled.div`
  background-color: #121212; /* Dark background */
  color: #e0e0e0; /* Light text */
  padding: 40px 0;
`;

const AboutContent = styled.div`
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #f5f5f5;
`;

const ContactSection = styled.div`
  margin-top: 40px;
`;

const SocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 2px;
  background: transparent;
  border: 2px solid white;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  background-color: white;

  img {
    width: 60px;
    height: 60px;
  }
`;

export const About = () => (
  <AboutContainer>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <AboutContent>
            <h1>Zinan Mu</h1>
            <p>穆梓楠</p>
            <p>Student at Vanderbilt University</p>

            <SectionTitle>About Me</SectionTitle>
            <p>
              I am a second-year master's student pursuing an M.S. in Computer Science at the School of Engineering, Vanderbilt University, with an expected graduation in May 2025.
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

            <ContactSection>
              <SectionTitle>Contact Me</SectionTitle>
              <p>Phone: (615) 479-6919</p>
              <p>Email: <a href="mailto:zinanmu.me@gmail.com" style={{ color: "#00aaff" }}>zinanmu.me@gmail.com</a></p>
            </ContactSection>

            <ContactSection>
              <SectionTitle>Follow Along</SectionTitle>
              <div>
                <SocialButton
                  href="https://www.linkedin.com/in/zinan-mu-8a1a25271/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/assets/linkedin.png" alt="LinkedIn Logo" />
                </SocialButton>
                <SocialButton
                  href="https://github.com/0x296"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/assets/github.png" alt="GitHub Logo" />
                </SocialButton>
              </div>
            </ContactSection>
          </AboutContent>
        </div>
      </div>
    </div>
  </AboutContainer>
);
