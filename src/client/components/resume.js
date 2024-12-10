"use strict";

import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

// Styled Components
const ResumeContainer = styled.div`
  background-color: #121212; /* Dark background */
  color: #e0e0e0; /* Light text */
  padding: 40px 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #f5f5f5;
`;

const ResumeContent = styled.div`
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
  margin-bottom: 40px;
`;

const SubSection = styled.div`
  margin-bottom: 60px;

  ul {
    padding-left: 20px;
    list-style: none;
  }

  li {
    margin-bottom: 10px;
    line-height: 1.6;
    position: relative;
    padding-left: 25px;

    &::before {
      content: "✷"; /* Custom list bullet */
      position: absolute;
      left: 0;
      top: 0.2em; /* Adjusted to align with the first line */
      color: #f5f5f5; /* Light color for the star */
      font-size: 0.8rem;
    }
  }
`;

const SkillsSection = styled.div`
  margin-bottom: 30px;
`;

const SkillsRow = styled.div`
  display: flex;
  justify-content: space-between;

  .skills-list {
    width: 48%; /* Equal width for both lists */
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
    line-height: 1.6;
    position: relative;
    padding-left: 25px;

    &::before {
      content: "✷";
      position: absolute;
      left: 0;
      top: 0.2em; /* Aligns the bullet with the first line */
      color: #f5f5f5;
      font-size: 0.8rem;
    }
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 12px 20px;
  width: 100%; /* Make button as wide as content */
  background: transparent;
  border: 2px solid white;
  color: white;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export const Resume = () => (
  <ResumeContainer>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <ResumeContent>
            <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Zinan Mu's Resume</h1>

            <SubSection>
              <SectionTitle>Education</SectionTitle>
                <strong>Vanderbilt University</strong> - M.S. Computer Science (Aug. 2023 - May. 2025)<br />
                <ul>
                <li>GPA: 4.0/4.0</li>
                </ul>
                <strong>Zhejiang University</strong> - B.E. Electronic Information Engineering (Sep. 2018 - Jun. 2022)<br />
                <ul>
                  <li>Also obtained a Second Major Certificate in Computer Science and Technology</li>
                </ul>
            </SubSection>

            <SubSection>
              <SectionTitle>Awards and Honors</SectionTitle>
              <ul>
                <li>Gold Medal, Asian Regional Contest of The International Collegiate Programming Contest (ICPC) Nanjing Site, 2020</li>
                <li>Gold Medal, China Collegiate Programming Contest (CCPC) Qinhuangdao Site, 2020</li>
              </ul>
            </SubSection>

            <SubSection>
              <SectionTitle>Experience</SectionTitle>
              <h3>Research Assistant - Zhejiang University</h3>
              <p>Dec. 2021 - Jun. 2022</p>
              <ul>
                <li>Developed a novel anti-photographing technique by adjusting the PWM dimming waveform of electronic screens to manipulate moiré patterns captured by cameras, effectively reducing privacy leaks.</li>
                <li>Independently conducted all programming and system testing, utilizing Python to implement simulation of the technique and validate its effectiveness.</li>
                <li>Authored a comprehensive summary paper detailing the project's methodology, results, and implications.</li>
              </ul>
            </SubSection>

            <SubSection>
              <SectionTitle>Projects</SectionTitle>
              <h3>News Sentiment Analyzer</h3>
              <p>Mar. 2024 -- Apr. 2024</p>
              <ul>
                <li>Developed an online web application that enables users to input a keyword and analyze recent sentiment trends from multiple news sources.</li>
                <li>Utilized Apache Kafka for efficient message brokering, and Docker and Kubernetes for containerized deployment.</li>
              </ul>

              <h3>Online Consultation Platform</h3>
              <p>May. 2022 -- Jun. 2022</p>
              <ul>
                <li>Developed a comprehensive platform enabling doctor-patient consultations through text, images, and videos.</li>
              </ul>
            </SubSection>

            <SkillsSection>
              <SectionTitle>Skills</SectionTitle>
              <SkillsRow>
                <div className="skills-list">
                  <h3>Programming Languages</h3>
                  <ul>
                    <li>C++</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>Rust</li>
                    <li>SQL</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Matlab</li>
                    <li>ReactJS</li>
                  </ul>
                </div>
                <div className="skills-list">
                  <h3>Framework/Tools</h3>
                  <ul>
                    <li>Git</li>
                    <li>Linux</li>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                    <li>Springboot</li>
                    <li>MongoDB</li>
                    <li>Django</li>
                    <li>Bootstrap</li>
                    <li>VueJS</li>
                    <li>jQuery</li>
                  </ul>
                </div>
              </SkillsRow>
            </SkillsSection>
            <div style={{ textAlign: "center" }}>
              <DownloadButton href="/my_resume/Zinan_Mu_resume.pdf" download>
                Download Resume PDF
              </DownloadButton>
            </div>
          </ResumeContent>
        </div>
      </div>
    </div>
  </ResumeContainer>
);
