import styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
      <footer className={styles.Footer}>
        © {new Date().getFullYear()} Martin Bradbury. All Rights Reserved.
      </footer>
    );
  };
  
  export default Footer;