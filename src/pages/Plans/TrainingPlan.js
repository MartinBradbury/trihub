import React from 'react';
import { Card, Media } from 'react-bootstrap';


const TrainingPlan = ({ plan }) => {


  return (
    
    <div>
      <h1>Training Plan Details</h1>
      {plan? (
        <Card key={plan.id}>
          <Media>
            <Media.Body>
              <p>{plan.title}</p> 
              <pre>
              <p>{plan.content}</p>
              </pre>
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
