import { HiArrowRight } from "react-icons/hi";

import styles from "./card.module.css";

export const Cards = (props) => {
  return (
    <div
      className={
        props.logos.name === "Apple Gift" ? styles.container1 : styles.container
      }
    >
      <div className={styles.border}>
        <h4>{props.logos.date}</h4>
        <button>Case Study</button>
        <p>{props.logos.name}</p>
        <p>{props.logos.platform}</p>
        <h3>{props.logos.device}</h3>
      </div>
      <div className={styles.logo}>
        <div>{props.logos.logo}</div>
        <div>{props.logos.next}</div>
      </div>
    </div>
  );
};
