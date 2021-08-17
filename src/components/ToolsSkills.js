import React from "react";
import Subtitle from "./Subtitle";
import { Col, Container, Row } from "react-bootstrap";

export default function ToolsSkills() {
  return (
    <>
      <Subtitle>
        Tools & <span>Skills</span>
      </Subtitle>
      <Container>
        <Row className="justify-content-center">
          <Col xxl="11">
            <p>Testing</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
