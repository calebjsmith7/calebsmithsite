"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ProjectSection from "../components/ProjectSection";
import myphoto from "../../public/expanded-cs-cc.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import TopBar from "@/components/TopBar";
import SearchOverlay from "@/components/SearchOverlay";

const apps = [
  {
    title: "Worship Pads Pro",
    image: "/app-placeholder.png",
  },
  {
    title: "Messenger Cup",
    image: "/mcup.png",
  },
  {
    title: "Prayer List",
    image: "/website-placeholder.png",
  },
  {
    title: "Prayer List for Ministries",
    image: "/plm.png",
  },
  {
    title: "Lesson Pro - Guitar Lessons",
    image: "/lpro.png",
  },
  {
    title: "Meal Mate - Meal Planning",
    image: "/mealmate.png",
  },
  {
    title: "Aviary Adventures",
    image: "/aviary.png",
  },
  {
    title: "Roto Toms",
    image: "/roto.png",
  },
  {
    title: "Setlist Genius",
    image: "/setlist.png",
  },
  {
    title: "Synth Bass Pro",
    image: "/synth.png",
  },
];
const websites = [
  {
    title: "Salesy",
    image: "/web12.png",
  },
  {
    title: "1st Electric",
    image: "/web0.png",
  },
  {
    title: "Magna Fab",
    image: "/web1.png",
  },
  {
    title: "Isaac!",
    image: "/web2.png",
  },
  {
    title: "Danielle Russo",
    image: "/web3.png",
  },
  {
    title: "Backroads Ministry",
    image: "/web4.png",
  },
  {
    title: "Magna Mechanical",
    image: "/web5.png",
  },
  {
    title: "Kennedy Racecars",
    image: "/web6.png",
  },
  {
    title: "Ywam",
    image: "/web7.png",
  },
  {
    title: "Traders Rally",
    image: "/web8.png",
  },
  {
    title: "Jubilee Store",
    image: "/web9.png",
  },
  {
    title: "Greenhouse",
    image: "/web10.png",
  },
  {
    title: "Jubilee Missions",
    image: "/web11.png",
  },
];
const logos = [
  {
    title: "Traders Rally",
    image: "/logos-placeholder.png",
  },
  {
    title: "1st Electric",
    image: "/logo11.png",
  },
  {
    title: "Jubilee Store",
    image: "/logo1.png",
  },
  {
    title: "Kennedy Racecars",
    image: "/logo2.png",
  },
  {
    title: "Danielle Russo",
    image: "/logo3.png",
  },
  {
    title: "Worship Pads",
    image: "/logo4.png",
  },
  {
    title: "Foolish Friends",
    image: "/logo5.png",
  },
  {
    title: "Synth Bass Pro",
    image: "/logo6.png",
  },
  {
    title: "Roto Toms",
    image: "/logo7.png",
  },
  {
    title: "Lesson Pro",
    image: "/logo8.png",
  },
  {
    title: "Setlist Genius",
    image: "/logo9.png",
  },
  {
    title: "PrayerList",
    image: "/logo10.png",
  },
];
const music = [
  {
    title: "So Amazed",
    image: "/music-placeholder.png",
  },
  {
    title: "Caleb Smith Worship Youtube",
    image: "/yt.png",
  },
  {
    title: "Only You",
    image: "/onlyyou.png",
  },
  {
    title: "Prophetic Piano",
    image: "/proph.png",
  },
];

export default function HomePage() {
  const [isSearchOverlayVisible, setSearchOverlayVisible] = useState(false);

  const handleOpenSearch = () => {
    setSearchOverlayVisible(true);
  };

  const handleCloseSearch = () => {
    setSearchOverlayVisible(false);
  };
  return (
    <div className={styles.container}>
      {isSearchOverlayVisible && <SearchOverlay onClose={handleCloseSearch} />}
      <header className={styles.header}>
        <TopBar />
        <Image
          src={myphoto}
          alt="My Photo"
          layout="fill"
          objectFit="cover"
          className={styles.bigphoto}
        />
        <div className={styles.overlay}>
          <div className={styles.textContainer}>
            <h1>Caleb Smith</h1>
            <p>Apps | Websites | Logos | Marketing | Music</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "300px",
                maxWidth: "30vw",
                marginTop: "10px",
              }}
            >
              <a href="mailto:calebjoelsmith@gmail.com">
                <button className={styles.contactButton}>
                  <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                  Contact
                </button>
              </a>

              <button
                className={styles.moreButton}
                onClick={() => setSearchOverlayVisible(true)}
              >
                <img
                  src="/info-circle.svg"
                  alt="Info Icon"
                  className={styles.svgicon}
                />
                Projects
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <ProjectSection title="Apps" projects={apps} />
        <ProjectSection title="Websites" projects={websites} />
        <ProjectSection title="Logos" projects={logos} />
        <ProjectSection title="Music" projects={music} />
      </main>
    </div>
  );
}
