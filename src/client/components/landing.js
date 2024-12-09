"use strict";

import React from "react";
import styled from "styled-components";

const LandingBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: main;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const ResumeSection = styled.div`
  max-width: 800px;
  text-align: left;
  margin: 20px 0;
`;

const SubSection = styled.div`
  margin-bottom: 20px;
`;

const DownloadButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Landing = () => (
  <LandingBase>
    <h1>Zinan Mu's Resume</h1>
    <ResumeSection>
      <SubSection>
        <h2>Education</h2>
        <p>
          <strong>Vanderbilt University</strong> - M.S. Computer Science (Aug. 2023 - May. 2025)<br />
          GPA: 4.0/4.0
        </p>
        <p>
          <strong>Zhejiang University</strong> - B.E. Electronic Information Engineering (Sep. 2018 - Jun. 2022)<br />
          Also obtained a Second Major Certificate in Computer Science and Technology
        </p>
      </SubSection>

      <SubSection>
        <h2>Awards and Honors</h2>
        <ul>
          <li>
            Gold Medal, Asian Regional Contest of The International Collegiate Programming Contest (ICPC) Nanjing Site, 2020
          </li>
          <li>
            Gold Medal, China Collegiate Programming Contest (CCPC) Qinhuangdao Site, 2020
          </li>
        </ul>
      </SubSection>

      <SubSection>
        <h2>Experience</h2>
        <h3>Research Assistant - Zhejiang University</h3>
        <p>Dec. 2021 - Jun. 2022</p>
        <ul>
          <li>
            Developed a novel anti-photographing technique by adjusting the PWM dimming waveform of electronic screens to manipulate moiré patterns captured by cameras, effectively reducing privacy leaks.
          </li>
          <li>
            Independently conducted all programming and system testing, utilizing Python to implement simulation of the technique and validate its effectiveness.
          </li>
          <li>
            Authored a comprehensive summary paper detailing the project's methodology, results, and implications.
          </li>
        </ul>
      </SubSection>

      <SubSection>
        <h2>Projects</h2>

        <h3>News Sentiment Analyzer</h3>
        <p>Mar. 2024 -- Apr. 2024</p>
        <ul>
          <li>
            Developed an online web application that enables users to input a keyword and analyze recent sentiment trends from multiple news sources.
          </li>
          <li>
            Utilized <strong>Apache Kafka</strong> for efficient message brokering, and utilized <strong>Docker</strong> and <strong>Kubernetes</strong> to facilitate containerized deployment, enhancing workload balancing and resource utilization across various nodes. Utilized <strong>MongoDB</strong> for robust and scalable message storage.
          </li>
          <li>
            Crafted a user-friendly web interface by leveraging <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> and <strong>React</strong> framework. Developed the backend with the <strong>Python</strong> <strong>Django</strong> framework and integrated Python <strong>NLTK</strong> library to employ machine learning techniques for accurate sentiment analysis.
          </li>
          <li>Successfully deployed the project on Chameleon Cloud.</li>
        </ul>

        <h3>Online Consultation Platform</h3>
        <p>May. 2022 -- Jun. 2022</p>
        <ul>
          <li>
            Developed a comprehensive platform enabling doctor-patient consultations through text, images, and videos. The platform supports account creation and login for doctors, patients, and web administrators, along with features for storing and managing patient medical records.
          </li>
          <li>
            Implemented the frontend in <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> using <strong>React</strong> framework, and implemented the backend in <strong>Java</strong> using <strong>Springboot</strong> framework. Utilized <strong>MySQL</strong> for managing user data.
          </li>
          <li>Managed version control using <strong>Git</strong>.</li>
        </ul>

        <h3>Geometry Tool</h3>
        <p>May. 2022 -- Jun. 2022</p>
        <ul>
          <li>
            Created a tool akin to GeoGebra for dynamic geometric shape drawing and analysis on a whiteboard, including parametric equations, intersections, and trajectories.
          </li>
          <li>
            Implemented the project in <strong>C++</strong> and used <strong>OpenGL</strong> graphic library GLFW for GUI.
          </li>
        </ul>
      </SubSection>


      <SubSection>
        <h2>Skills</h2>
        <p>
          <strong>Programming Languages:</strong> C++, Python, Java, Rust, C, SQL, HTML, CSS, JavaScript, Matlab
        </p>
        <p>
          <strong>Framework/Tools:</strong> Git, Linux, MySQL, MongoDB, Springboot, Django, Docker, Kubernetes, ReactJS, VueJS, NodeJS, Bootstrap, jQuery
        </p>
      </SubSection>
    </ResumeSection>
    <DownloadButton href="/path-to-resume.pdf" download>
      Download Resume PDF
    </DownloadButton>
  </LandingBase>
);
