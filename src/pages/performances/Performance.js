import React, { useState } from 'react';
import Styles from '../../styles/Performance.module.css';
import { Card, Media } from 'react-bootstrap';
import { MoreDropdownPerformance } from '../../components/MoreDropDownPerformance';
import { axiosReq } from '../../api/axiosDefaults';
import { Modal, Button } from 'react-bootstrap'; // Import Modal and Button

const Performance = (props) => {
  const { is_owner, id, content, owner, time, title } = props;
  const [showModal, setShowModal] = useState(false); // State for showing the modal

  const handleDelete = async () => {
    try {
      const response = await axiosReq.delete(`/performances/${id}`);

      if (response.status!== 204) {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
      window.location.reload();
    } catch (error) {
      console.error('Error deleting performance:', error.message);
    }
  };

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleConfirmDelete = () => {
    handleDelete();
    handleCloseModal();
  };

  const isCurrentUserOwner = is_owner === true;

  return (
    <>
      <Card className={`${Styles.PerformanceSpacing} ${Styles.pre}`}>
        {isCurrentUserOwner && (
          <MoreDropdownPerformance handleDelete={handleOpenModal} />
        )}
        {!isCurrentUserOwner && (
          <p className="text-right small">Your performance</p>
        )}
        <Card.Body>
          <Media className="allign-items-center justify-content-between">
            <h2>{title}</h2>
            <p>{time}</p>
            <p>{content}</p>
            <p>Performance: {owner}</p>
          </Media>
        </Card.Body>
      </Card>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this performance?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Performance;
