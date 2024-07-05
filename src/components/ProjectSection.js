// src/components/ProjectSection.js

import Image from "next/image";
import styles from "../styles/ProjectSection.module.css";

export default function ProjectSection({ title, projects }) {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.scrollContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className={
                title == "Logos" ? styles.logoImage : styles.projectImage
              }
            />
            <p>{project.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
