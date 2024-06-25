import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import { Col, Row } from "react-bootstrap";
import Goal from "./Goal";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import TrainingPlan from "./TrainingPlan";

function Goals() {
  const [goals, setGoals] = useState([]);
  const [filteredPlans, setFilteredPlans] = useState([]);

  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchGoalsAndPlans = async () => {
      try {
        const goalsResponse = await axiosReq.get(`/goals`);
        const plansResponse = await axiosReq.get(`/trainingplans`);

        if (currentUser) {
          const filteredGoals = goalsResponse.data.results.filter(
            (goal) => goal.owner === currentUser.username
          );
          setGoals(filteredGoals);

          // Now that we have filtered goals, calculate userHoursPerWeek
          const userHoursPerWeek = filteredGoals[0]?.hours_per_week || 0; // Fallback to 0 if no goals exist

          const userPlanLength = filteredGoals[0]?.plan_length || 0;


          // Filter plans based on hours_per_week
          const filteredPlansData = plansResponse.data.results.filter(
            (plan) =>
              plan.hours_available === userHoursPerWeek &&
              plan.weeks_available === userPlanLength
          );
          setFilteredPlans(filteredPlansData);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchGoalsAndPlans();
  }, [currentUser]); // Dependency array includes currentUser to refetch on change
  return (
    <>
      {goals.map((goal, index) => (
        <React.Fragment key={index}>
          <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={12}>
              <Goal {...goal} />
              {filteredPlans.length > 0 ? (
                filteredPlans.map((plan, planIndex) => (
                  <TrainingPlan key={planIndex} plan={plan} />
                ))
              ) : (
                <p>No suitable training plans found.</p>
              )}
            </Col>
          </Row>
        </React.Fragment>
      ))}
    </>
  );
}

export default Goals;
