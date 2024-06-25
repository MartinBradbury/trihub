import React from 'react';
import { Card, Media } from 'react-bootstrap';
import styles from "../../styles/Performance.module.css";

const TrainingPlan = ({ plan }) => {
  // No need for useEffect since we're receiving a single plan as a prop

  return (
    <div>
      <h1>Training Plan Details</h1>
      {plan? (
        <Card key={plan.id} className={styles.planCard}>
          <Media>
            <Media.Body>
              <p>{plan.title}</p> {/* Adjusted to use plan.title */}
              <p>{plan.created_at}</p> {/* Adjusted to use plan.created_at */}
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
