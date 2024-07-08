import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Margin4.module.css";

export type Margin4Type = {
  className?: string;
  entrenadoresProfesionales?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMarginLeft?: CSSProperties["marginLeft"];
};

const Margin4: FunctionComponent<Margin4Type> = ({
  className = "",
  entrenadoresProfesionales,
  propMinWidth,
  propMarginLeft,
}) => {
  const margin1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      marginLeft: propMarginLeft,
    };
  }, [propMinWidth, propMarginLeft]);

  return (
    <div className={[styles.margin, className].join(" ")} style={margin1Style}>
      <div className={styles.container}>
        <div className={styles.margin1}>
          <div className={styles.overlay}>
            <div className={styles.container1}>
              <img className={styles.icon} alt="" src="/icon8.svg" />
            </div>
          </div>
        </div>
        <div className={styles.heading3}>
          <div className={styles.entrenadoresProfesionales}>
            {entrenadoresProfesionales}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Margin4;
