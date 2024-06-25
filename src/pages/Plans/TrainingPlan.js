import React from 'react';
import { Card, Media } from 'react-bootstrap';
import styles from "../../styles/Performance.module.css";

const TrainingPlan = ({ plan }) => {


  return (
    <div>
      <h1>Training Plan Details</h1>
      {plan? (
        <Card key={plan.id} className={styles.planCard}>
          <Media>
            <Media.Body>
              <p>{plan.title}</p> 
              <p>{plan.created_at}</p>
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
