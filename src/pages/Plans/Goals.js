import React, { useEffect, useState } from 'react';
import { axiosReq } from '../../api/axiosDefaults';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Col, Row } from 'react-bootstrap';
import Goal from './Goal';
import { useCurrentUser, useSetCurrentUser } from '../../contexts/CurrentUserContext';

function Goals() {
  const [goals, setGoals] = useState([]);
  // Assuming currentUser is available here. Adjust according to your app's architecture.
  
  const currentUser = useCurrentUser();
  console.log(currentUser)

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await axiosReq.get(`/goals`);
        // Access the 'results' array within the response object
        const filteredGoals = response.data.results.filter(goal => goal.owner === currentUser.username);
        setGoals(filteredGoals);
        console.log(filteredGoals);
      } catch (err) {
        console.log(err);
      }
    };
    fetchGoals();
  }, [currentUser]);

  return (
    <>
      {goals.map((goal, index) => (
        <Row key={index} className="h-100">
          <Col className="py-2 p-0 p-lg-2" lg={12}>
            <Goal {...goal} setGoals={setGoals} />
          </Col>
        </Row>
      ))}
    </>
  );
}

export default Goals;
