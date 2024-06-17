import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import Asset from "../../components/Asset";

import Upload from "../../assets/upload.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function PerformanceCreateForm() {
  const [errors, setErrors] = useState({});

  const [performanceData, setPerformanceData] = useState({
    owner: "",
    event: "",
    time: "",
    distance: "",
    completed_date: "",
    content: "",
  });
  const { owner, event, time, distance, completed_date, content } =
    performanceData;

  const history = useHistory();

  const handleChange = (event) => {
    setPerformanceData({
      ...performanceData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("event", event);
    formData.append("time", time);
    formData.append("completed date", completed_date);
    formData.append("content", content);

    try {
      const { data } = await axiosReq.post("/performances/", formData);
      history.push(`/performances/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>event</Form.Label>
        <Form.Control
          type="text"
          name="event"
          value={event}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>content</Form.Label>
        <Form.Control
          as="textarea"
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Completed</Form.Label>
        <Form.Control
          type="date"
          name="completed_date"
          value={completed_date}
          onChange={handleChange}
        />
      </Form.Group>
      {/* <Form.Group>
        <Form.Label>Time</Form.Label>
        <Form.Control
          as="time"
          name="time"
          value={time}
          onChange={handleChange}
        />
      </Form.Group> */}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PerformanceCreateForm;
