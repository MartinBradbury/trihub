import React from "react";
import styles from "../../styles/Goals.module.css";
import btnStyles from "../../styles/Button.module.css"

import { Card, Media } from "react-bootstrap";

const PLAN_LENGTH_LABELS = {
  1: "3 Weeks",
  2: "6 Weeks",
  3: "9 Weeks",
};

const HOURS_LABELS = {
  1: "3 Hours",
  2: "6 Hours",
  3: "9 Hours",
};

const Goal = (props) => {
  const { content, event_date, hours_per_week, plan_length } = props;
  const planLengthLabel = PLAN_LENGTH_LABELS[plan_length];
  const hoursLabel = HOURS_LABELS[hours_per_week];

  return (
    <>
    <Card className={styles.COntent}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <p>Event Date:</p>
          <p>{event_date}</p>
        </Media>
        <Media className="align-items-center justify-content-between">
          <p>Hours per week:</p>
          <p>{hoursLabel}</p>
        </Media>
        <Media className="align-items-center justify-content-between">
          <p>Length of Plan:</p>
          <p>{planLengthLabel}</p>
        </Media>
        <Media className={styles.Content}>
          <p>{content}</p>
        </Media>
      </Card.Body>
    </Card>
  </>
  );
};

export default Goal;
