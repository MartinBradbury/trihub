import React from 'react'
import styles from "../styles/Video.module.css";
import video from "../assets/videoplayback.mp4";
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (!isHomePage) {
    return null;
  }

  return (
    <div className={styles.Background}>
      <video autoPlay muted loop className={styles.Video}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>Test</p>
      <div className={styles.Content}>
        <h1>Welcome to my website</h1>
      </div>
    </div>
  );
};

export default HomePage