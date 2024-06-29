import React from "react";
import Styles from "../../styles/Performance.module.css";
// import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";



const Performance = (props) => {
  const { is_owner, id, content, owner, time, title, } = props;

  // const currentUser = useSetCurrentUser();
  const isCurrentUserOwner = is_owner === true;

  return (
    <Card className={Styles.PerformanceSpacing}>
      <Card.Body>
        <Media className="allign-items-center justify-content-between">
        <a href={`/performances/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3>Event: {title}</h3>
        </a>
          <p>Time: {time}</p>
          <p>Performance by: {owner}</p>
          <p>Comment: {content}</p>

          {isCurrentUserOwner && <p>You own this performance.</p>}

          {!isCurrentUserOwner && <p>{owner}</p>}
        </Media>
      </Card.Body>
    </Card>
  );
};

export default Performance;
