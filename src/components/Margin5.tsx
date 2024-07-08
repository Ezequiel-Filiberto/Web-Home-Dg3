import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Margin5.module.css";

export type Margin5Type = {
  className?: string;
  icon?: string;
  videoPlaceholders?: string;
  clientesSatisfecho?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
};

const Margin5: FunctionComponent<Margin5Type> = ({
  className = "",
  icon,
  videoPlaceholders,
  clientesSatisfecho,
  propFlex,
  propMinWidth,
  propWidth,
}) => {
  const marginStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  return (
    <div className={[styles.margin, className].join(" ")} style={marginStyle}>
      <div className={styles.container}>
        <div className={styles.margin1}>
          <div className={styles.container1}>
            <img className={styles.icon} alt="" src={icon} />
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.container3}>
            <div className={styles.div}>{videoPlaceholders}</div>
          </div>
          <div className={styles.container4}>
            <div className={styles.clientesSatisfecho}>
              {clientesSatisfecho}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Margin5;
