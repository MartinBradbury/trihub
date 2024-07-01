import React from "react";
import NoResult from "../assets/no-results.png";
import styles from "../styles/NoResults.module.css";
import btnStyles from "../styles/Button.module.css"

const NotFound = () => {
  return (
    <div className={styles.Margin}>
      Sorry, the page you are looking for doesn't exist
      <img src={NoResult} alt="No result" />
      <a href="/">
        <button
          className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Center} ${btnStyles.Text}`}
        >
          Go Back
        </button>
      </a>
    </div>
  );
};

export default NotFound;
