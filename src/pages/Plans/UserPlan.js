import React, { useState, useEffect } from "react";
import Goals from "./Goals";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card } from "react-bootstrap";
import Styles from "../../styles/Goals.module.css";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";

const UserPlan = () => {
  const [isLoading, setIsLoading] = useState(true);
  const currentUser = useCurrentUser();
  const [hasGoals, setHasGoals] = useState(false);

  useEffect(() => {
    const fetchGoalsAndPlans = async () => {
      try {
        setIsLoading(true);
        const goalsResponse = await axiosReq.get(`/goals`);
        const filteredGoals = goalsResponse.data.results.filter(
          (goal) => goal.owner === currentUser.username
        );

        if (filteredGoals.length > 0) {
          setHasGoals(true);
        }

        setIsLoading(false);
        return filteredGoals;
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };

    if (currentUser) {
      fetchGoalsAndPlans().then((filteredGoals) => {});
    }
  }, [currentUser]);

  return (
    <>
      <div className={`${btnStyles.Spacing} ${btnStyles.Margin}`}>
        {isLoading? (
          <div className={appStyles.Container}>
            <Asset spinner />
          </div>
        ) : (
          <>
            {hasGoals? (
              <div>
                <a href="/goals/create">
                  <button className={`${btnStyles.Button} ${btnStyles.Text}`}>
                    Change Goal
                  </button>
                </a>
              </div>
            ) : (
              <>
                <Card>
                  <Card.Body className={`${Styles.Content}`}>
                    <p>If you would like a training plan you must create a goal.</p>
                    <a href="/goals/create">
                      <button className={`${btnStyles.Button} ${btnStyles.Text}`}>Create Goal</button>
                    </a>
                  </Card.Body>
                </Card>
              </>
            )}
          </>
        )}
      </div>
      <div>
        <Goals />
      </div>
    </>
  );
};

export default UserPlan;
