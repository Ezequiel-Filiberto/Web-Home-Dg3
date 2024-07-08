import { FunctionComponent } from "react";
import styles from "./Margin1.module.css";

export type Margin1Type = {
  className?: string;
  icon?: string;
  llamanos?: string;
  prop?: string;
  prop1?: string;
};

const Margin1: FunctionComponent<Margin1Type> = ({
  className = "",
  icon,
  llamanos,
  prop,
  prop1,
}) => {
  return (
    <div className={[styles.margin, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.overlay}>
          <div className={styles.container1}>
            <img className={styles.icon} alt="" src={icon} />
          </div>
          <div className={styles.heading3}>
            <b className={styles.llamanos}>{llamanos}</b>
          </div>
          <div className={styles.container2}>
            <div className={styles.llamanos}>{prop}</div>
          </div>
          <div className={styles.container3}>
            <div className={styles.llamanos}>{prop1}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Margin1;
