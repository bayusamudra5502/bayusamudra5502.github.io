import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import profile from "../assets/img/profile.png";
import line from "../assets/img/line.svg";
import linkedin from "../assets/img/linkedin.svg";
import instagram from "../assets/img/instagram.svg";
import telegram from "../assets/img/telegram.svg";
import { FiMail } from "react-icons/fi";
import { AiOutlineCloudDownload } from "react-icons/ai";

export default function Jumbotron() {
  return (
    <div className="jumbotron">
      <Container>
        <Row className="justify-content-center">
          <Col sm="12" md="7" xxl="6" className="order-2 order-md-1">
            <p className="hello">Hi, I'm</p>
            <p className="name">Bayu Samudra</p>
            <p className="who">
              A student who is interested in Web Development
            </p>
            <p className="description">
              I'm from Indonesia. I'm a student at Institut Teknologi Bandung.
              I've worked as UI/UX Designer on Badan Pengurus Angkatan STEI
              2020. Currently, I'm exploring Web Development and build some
              mini-project for my personal exercise.
            </p>
            <div className="bar">
              <Button variant="primary" href="mailto:contact@bayusamudra.my.id">
                <FiMail style={{ margin: "0 8px 0 0" }} />
                Email Me
              </Button>
              <div className="social">
                <a href="https://link.bayusamudra.my.id/line">
                  <img src={line} alt="Line" />
                </a>
                <a href="https://link.bayusamudra.my.id/telegram">
                  <img src={telegram} alt="Telegram" />
                </a>
                <a href="https://link.bayusamudra.my.id/instagram">
                  <img src={instagram} alt="Instagram" />
                </a>
                <a href="https://link.bayusamudra.my.id/linkedin">
                  <img src={linkedin} alt="Linkedin" />
                </a>
              </div>
            </div>
            <div className="cv">
              <a href="/">
                <AiOutlineCloudDownload
                  fontSize="1.4em"
                  style={{ margin: "0 8px 0 0" }}
                />
                Download CV
              </a>
            </div>
          </Col>
          <Col sm="12" md="5" className="picture order-1 order-md-2">
            <img src={profile} alt="Profile" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
