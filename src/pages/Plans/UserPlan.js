import React, { useState, useEffect } from "react";
import Goals from "./Goals";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card } from "react-bootstrap";
import Styles from "../../styles/Goals.module.css";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import { Modal, Button } from "react-bootstrap";

const UserPlan = () => {
  const [isLoading, setIsLoading] = useState(true);
  const currentUser = useCurrentUser();
  const [hasGoals, setHasGoals] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);


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

  const handleShowConfirmModal = () => setShowConfirmModal(true);
  const handleCloseConfirmModal = () => setShowConfirmModal(false);

  const handleConfirmNavigation = () => {
    window.location.href = "/goals/create";
    handleCloseConfirmModal();
  };

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
                <Button onClick={handleShowConfirmModal} className={`${btnStyles.Button} ${btnStyles.Text}`}>
                  Change Goal
                </Button>
                <Modal show={showConfirmModal} onHide={handleCloseConfirmModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>Warning</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>You will lose your current training plan. Are you sure you want to continue?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseConfirmModal}>
                      Cancel
                    </Button>
                    <a href="/goals/create" style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleConfirmNavigation}>
                      <Button variant="primary">Confirm</Button>
                    </a>
                  </Modal.Footer>
                </Modal>
              </div>
            ) : (
              <>
                <Card>
                  <Card.Body className={`${Styles.Content}`}>
                    <p>If you would like a training plan you must create a goal.</p>
                    <Button href="/goals/create" className={`${btnStyles.Button} ${btnStyles.Text}`}>Create Goal</Button>
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
