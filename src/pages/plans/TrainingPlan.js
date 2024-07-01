import React from "react";
import { Card, Media } from "react-bootstrap";
import styles from "../../styles/TrainingPlan.module.css";

const TrainingPlan = ({ plan }) => {
  return (
    <div className={styles.Margin}>
      <h1>Training Plan Details</h1>
      {plan ? (
        <Card key={plan.id}>
          <Media>
            <Media.Body>
              <div className={styles.Title}>
                <p>{plan.title}</p>
              </div>
              <div className={styles.content}>
                <p>{plan.content}</p>
              </div>
              <p>This plan was created: {plan.created_at}</p>
            </Media.Body>
          </Media>
        </Card>
      ) : (
        <p>No plan details found.</p>
      )}
    </div>
  );
};

export default TrainingPlan;
