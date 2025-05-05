import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCard({ title, description }) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
