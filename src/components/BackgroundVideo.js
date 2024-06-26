import React from "react";
import styles from "../styles/Video.module.css";
import video from "../assets/videoplayback.mp4";
import { useLocation } from "react-router-dom";
import logo from "../assets/trihubnobg.png";

const HomePage = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  if (!isHomePage) {
    return null;
  }

  return (
    <div className={styles.Background}>
      <video autoPlay muted loop className={styles.Video} alt="triathlon background video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>Test</p>
      <div className={styles.Content}>
        <img src={logo} alt="trihub logo"/>
        <h3>A Triathlon Community</h3>
        <p>For triathletes of all abilities</p>
      </div>
    </div>
  );
};

export default HomePage;
