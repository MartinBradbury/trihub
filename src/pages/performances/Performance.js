import React from "react";
import Styles from "../../styles/Performance.module.css";
// import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { MoreDropdownPerformance } from "../../components/MoreDropDownPerformance";
import { axiosReq } from "../../api/axiosDefaults";

const Performance = (props) => {
  const { is_owner, id, content, owner, time, title } = props;

  const handleDelete = async () => {
    try {
      const response = await axiosReq.delete(`/performances/${id}`);

      if (response.status !== 204) {
        throw new Error(`Unexpected response status: ${response.status}`);
      }

      alert("Performance deleted successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting performance:", error.message);
    }
  };

  const isCurrentUserOwner = is_owner === true;

  return (
    <Card className={`${Styles.PerformanceSpacing} ${Styles.pre}`}>
      {isCurrentUserOwner && (
        <MoreDropdownPerformance handleDelete={handleDelete} />
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
  );
};

export default Performance;
