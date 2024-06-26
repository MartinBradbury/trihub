import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import bgimg1 from "../../assets/triathlon.jpg";
import bgimg2 from "../../assets/triathlonbike.jpg";
import bgimg3 from "../../assets/bicycles.jpg";
import bgimg4 from "../../assets/triathleteswim.jpg";

const Home = () => {
  return (
    <>
      <Container>
        <div>
          <h1>Welcome trihub</h1>
          <p>
            Welcome to TriHub, your go-to hub for triathlon enthusiasts Here,
            you can share your triathlon memories, connect with fellow athletes,
            and set goals for your next event. Explore our community page,
            follow inspiring triathletes, and receive a free training plan to
            help you reach your next milestone. Let's unite in our passion for
            triathlon and make every moment count.
          </p>
        </div>
        <hr/>
        <Row>
          <Col xs={12} sm={12} md={6} lg={12}> {/* Adjusted to ensure proper responsiveness */}
            <Card className={styles.card}>
              <Card.Img src={bgimg1} className={styles.img} />
              <Card.Body className={styles.overlay}>
                <Card.Title>
                  <h1>British Triathlon Website</h1>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={12}> {/* Adjusted to ensure proper responsiveness */}
            <Card className={styles.card}>
              <Card.Img src={bgimg2} className="card-img-top" />
              <Card.Body className={styles.overlay}>
                <Card.Title>
                  <h3>British Triathlon Website</h3>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={12}> {/* Adjusted to ensure proper responsiveness */}
            <Card className={styles.card}>
              <Card.Img src={bgimg3} className="card-img-top" />
              <Card.Body className={styles.overlay}>
                <Card.Title>
                  <h3>British Triathlon Website</h3>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={12}> {/* Adjusted to ensure proper responsiveness */}
            <Card className={styles.card}>
              <Card.Img src={bgimg4} className="card-img-top" />
              <Card.Body className={styles.overlay}>
                <Card.Title>
                  <h3>British Triathlon Website</h3>
                </Card.Title>
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
