import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import { axiosReq } from "../../api/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

const PerformanceCreateForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const history = useHistory();

  const [performanceData, setPerformanceData] = useState({
    event: 1,
    content: "",
    owner: "",
    time: "",
    complete_date: "",
  });
  const { event, content, time, complete_date } = performanceData;
  const [events, setEvents] = useState({ results: [] });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axiosReq.get("/events/");
        setEvents(data);
        console.log(events);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    fetchEvents();
  }, [events]);

  const [errors, setErrors] = useState({});

  const handleSelectChange = (event) => {
    
    const eventIdInt = parseInt(event.target.value, 10);
    setPerformanceData({
      ...performanceData,
      event: eventIdInt,
    });
  };

  const handleChange = (event) => {
    setPerformanceData({
      ...performanceData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("event", performanceData.event);
    formData.append("owner", { currentUser });
    formData.append("content", content);
    formData.append("time", time);
    formData.append("complete_date", complete_date);
    console.log(performanceData);

    try {
      await axiosReq.post(`/performances/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
      }));
      history.goBack();
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  const textFields = (
    <>
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          value={content}
          onChange={handleChange}
          name="content"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Completed Date</Form.Label>
        <Form.Control
          type="date"
          value={complete_date}
          onChange={handleChange}
          name="complete_date"
        />
      </Form.Group>
      {errors?.complete_date?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Control
        as="select"
        value={event}
        onChange={(e) => handleSelectChange(e)}
        name="event"
      >
        {events.results.map((eventItem, index) => (
          <option key={index} value={eventItem.id}>
            {eventItem.title}
          </option>
        ))}
      </Form.Control>
      <Form.Group>
        <Form.Label>Performance</Form.Label>
        <Form.Control
          type="time"
          value={time}
          onChange={handleChange}
          name="time"
        />
      </Form.Group>
      {errors?.time?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        save
      </Button>
    </>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
          <Container className={appStyles.Content}>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
};

export default PerformanceCreateForm;
