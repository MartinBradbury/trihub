import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import bgimg from "../../assets/signupimg.jpg";

const Home = () => {
  return (
    <>
      <Container>
        <div>
          <h1>WELCOME TO THE WEBSITE HERE YOU WILL FIND...</h1>
        </div>

        <Row>
          <Col>
            <Card className={styles.card} md={6} lg={12}>
              <Card.Img src={bgimg} className={styles.img} />
              <Card.Body className={styles.overlay}>
                <Card.Title><h1>British Triathlon Website</h1></Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className={styles.card} md={6} lg={12}>
              <Card.Img src={bgimg} className="card-img-top" />
              <Card.Body className={styles.overlay}>
                <Card.Title><h3>British Triathlon Website</h3></Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card} md={6} lg={12}>
              <Card.Img src={bgimg} className="card-img-top" />
              <Card.Body className={styles.overlay}>
                <Card.Title><h3>British Triathlon Website</h3></Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
