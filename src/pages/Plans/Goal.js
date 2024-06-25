import React from "react";
import styles from "../../styles/Performance.module.css";

import { Card, Media } from "react-bootstrap";



const Goal = (props) => {
  const { is_owner, id, content, event_date, owner, hours_per_week } = props;

  const isCurrentUserOwner = is_owner === true;

  return (
    <Card className={styles.Performance}>
      <Card.Body>
        <Media className="allign-items-center justify-content-between">
        <a href={`/goals/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3>{owner}</h3>
        </a>
          <p>{event_date}</p>
          <p>{hours_per_week}</p>
          <p>{content}</p>
          <p>{is_owner}</p>

          {isCurrentUserOwner && <p>You own this performance.</p>}

          {!isCurrentUserOwner && <p>{owner}</p>}
        </Media>
      </Card.Body>
    </Card>
  );
};

export default Goal;
