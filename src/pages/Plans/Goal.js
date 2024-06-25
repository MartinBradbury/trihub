import React from "react";
import styles from "../../styles/Performance.module.css";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, Overlay, OverlayTrigger, Tooltip } from "react-bootstrap";
// Corrected import path for Link
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";


const Goal = (props) => {
  const { is_owner, id, content, event_date, owner, hours_per_week } = props;

  const currentUser = useSetCurrentUser();
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
          {/* Conditionally render this paragraph based on ownership */}
          {isCurrentUserOwner && <p>You own this performance.</p>}
          {/* Optionally, hide the owner info if the current user is the owner */}
          {!isCurrentUserOwner && <p>{owner}</p>}
        </Media>
      </Card.Body>
    </Card>
  );
};

export default Goal;
