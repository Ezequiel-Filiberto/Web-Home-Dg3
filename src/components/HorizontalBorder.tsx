import { FunctionComponent } from "react";
import styles from "./HorizontalBorder.module.css";

export type HorizontalBorderType = {
  className?: string;
  quTiposDeClasesOfrecenEnA?: string;
};

const HorizontalBorder: FunctionComponent<HorizontalBorderType> = ({
  className = "",
  quTiposDeClasesOfrecenEnA,
}) => {
  return (
    <div className={[styles.horizontalborder, className].join(" ")}>
      <div className={styles.heading3}>
        <div className={styles.quTiposDeContainer}>
          <ol className={styles.quTiposDeClasesOfrecenEn}>
            <li>{quTiposDeClasesOfrecenEnA}</li>
          </ol>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.container1}>
          <img className={styles.icon} alt="" src="/icon17.svg" />
        </div>
      </div>
    </div>
  );
};

export default HorizontalBorder;
