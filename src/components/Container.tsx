import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Container.module.css";

export type ContainerType = {
  className?: string;
  leerMs?: string;
  icon?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const Container: FunctionComponent<ContainerType> = ({
  className = "",
  leerMs,
  icon,
  propPadding,
}) => {
  const containerStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={[styles.container, className].join(" ")}
      style={containerStyle}
    >
      <div className={styles.link}>
        <div className={styles.container1}>
          <div className={styles.leerMs}>{leerMs}</div>
        </div>
        <div className={styles.margin}>
          <div className={styles.container2}>
            <img className={styles.icon} alt="" src={icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
