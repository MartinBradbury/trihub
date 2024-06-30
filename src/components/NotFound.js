import React from "react";
import NoResult from "../assets/no-results.png";
import styles from "../styles/NoResults.module.css";

const NotFound = () => {
  return (
    <div className={styles.Margin}>
      Sorry, the page you are looking for doesn't exist
      <img src={NoResult} />
    </div>
  );
};

export default NotFound;
