import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
       
          <Col md={4} className="project-card">
  <ProjectCard
    title="ParentsEye"
    description="ParentsEye is a real-time school bus tracking application that allows parents and school administrators to monitor the location of school buses, ensuring the safety and punctuality of students. The app provides live bus tracking, estimated arrival times, and instant notifications for route changes or delays."
  />
</Col>

<Col md={4} className="Credence Tracker">
  <ProjectCard
    title="RocketSales Tracker"
    description="RocketSalesTracker is a real-time sales team tracking and task management platform that enables supervisors to monitor the live location of sales representatives and assign tasks dynamically."
  />
</Col>


        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
