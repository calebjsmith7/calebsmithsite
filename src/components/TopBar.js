// src/components/TopBar.js
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <a
        href="https://github.com/calebjsmith7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className={styles.githubButton}>
          <FontAwesomeIcon
            icon={faGithub}
            className={styles.githubIcon}
            color="#457b9d"
          />
        </button>
      </a>
      <a href="/resume.pdf" target="_blank">
        <button className={styles.resumeButton}>Resume</button>
      </a>
    </div>
  );
};

export default TopBar;
