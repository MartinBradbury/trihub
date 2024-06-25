import React from "react";
import styles from "../../styles/Performance.module.css";

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
  const { is_owner, id, content, event_date, owner, hours_per_week, plan_length } = props;
  const planLengthLabel = PLAN_LENGTH_LABELS[plan_length];
  const hoursLabel = HOURS_LABELS[hours_per_week];

  const isCurrentUserOwner = is_owner === true;

  return (
    <Card className={styles.Performance}>
      <Card.Body>
        <Media className="allign-items-center justify-content-between">
        <a href={`/goals/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <p>{owner}</p>
        </a>
          <p>{event_date}</p>
          <p>{hoursLabel}</p>
          <p>{planLengthLabel}</p>
          <p>{content}</p>
          <p>{is_owner}</p>

          {isCurrentUserOwner && <h6>You own this performance.</h6>}

          {!isCurrentUserOwner && <p>{owner}</p>}
        </Media>
      </Card.Body>
    </Card>
  );
};

export default Goal;
