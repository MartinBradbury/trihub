import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import { Alert } from "react-bootstrap";

function GoalsCreateForm() {
  const setCurrentUser = useSetCurrentUser();
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [goalData, setGoalData] = useState({
    event_date: "",
    hours_per_week: "",
    content: "",
    plan_length: "",
  });

  const handleChange = (event) => {
    setGoalData({
      ...goalData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("hours_per_week", goalData.hours_per_week);
    formData.append("plan_length", goalData.plan_length);
    formData.append("content", goalData.content);
    formData.append("event_date", goalData.event_date);

    try {
      await axiosReq.post(`/goals/`, formData);
      setCurrentUser((currentUser) => ({ ...currentUser }));
      history.goBack();
    } catch (err) {
      // console.log(err);
      setErrors(err.response?.data);
    }
  };

  const hoursOptions = [
    { value: "1", label: "3 Hours" },
    { value: "2", label: "6 Hours" },
    { value: "3", label: "9 Hours" },
  ];
  const lengthOptions = [
    { value: "1", label: "3 Weeks" },
    { value: "2", label: "6 Weeks" },
    { value: "3", label: "9 Weeks" },
  ];

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Event Date</Form.Label>
        <Form.Control
          type="date"
          name="event_date"
          value={goalData.event_date}
          onChange={handleChange}
        />
        {errors?.event_date?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Group>
      <Form.Group>
        <Form.Label>Hours Per Week</Form.Label>
        <Form.Control
          as="select"
          name="hours_per_week"
          value={goalData.hours_per_week}
          onChange={handleChange}
        >
          {hoursOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Control>
        {errors?.hours_per_week?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Group>
      <Form.Group>
        <Form.Label>Plan Length</Form.Label>
        <Form.Control
          as="select"
          name="plan_length"
          value={goalData.plan_length}
          onChange={handleChange}
        >
          {lengthOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          type="textbox"
          name="content"
          value={goalData.content}
          onChange={handleChange}
        />
      </Form.Group>

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
        <Col md={8} lg={8} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default GoalsCreateForm;
