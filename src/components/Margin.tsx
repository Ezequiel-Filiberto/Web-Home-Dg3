import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Margin.module.css";

export type MarginType = {
  className?: string;
  linksUtiles?: string;
  inicio?: string;
  quinesSomos?: string;
  loQueNosDiferencia?: string;
  ventajasDeNuestrosCursos?: string;

  /** Style props */
  propRight?: CSSProperties["right"];
  propLeft?: CSSProperties["left"];
};

const Margin: FunctionComponent<MarginType> = ({
  className = "",
  linksUtiles,
  inicio,
  quinesSomos,
  loQueNosDiferencia,
  ventajasDeNuestrosCursos,
  propRight,
  propLeft,
}) => {
  const margin4Style: CSSProperties = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  return (
    <div className={[styles.margin, className].join(" ")} style={margin4Style}>
      <div className={styles.container}>
        <div className={styles.heading4}>
          <b className={styles.linksUtiles}>{linksUtiles}</b>
        </div>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.margin1}>
              <div className={styles.container1}>
                <img className={styles.icon} alt="" src="/icon24.svg" />
              </div>
            </div>
            <div className={styles.link}>
              <div className={styles.inicio}>{inicio}</div>
            </div>
          </div>
          <div className={styles.item1}>
            <div className={styles.margin1}>
              <div className={styles.container1}>
                <img className={styles.icon} alt="" src="/icon24.svg" />
              </div>
            </div>
            <div className={styles.link}>
              <div className={styles.inicio}>{quinesSomos}</div>
            </div>
          </div>
          <div className={styles.item1}>
            <div className={styles.margin1}>
              <div className={styles.container1}>
                <img className={styles.icon} alt="" src="/icon24.svg" />
              </div>
            </div>
            <div className={styles.link}>
              <div className={styles.inicio}>{loQueNosDiferencia}</div>
            </div>
          </div>
          <div className={styles.item1}>
            <div className={styles.margin1}>
              <div className={styles.container1}>
                <img className={styles.icon} alt="" src="/icon24.svg" />
              </div>
            </div>
            <div className={styles.link}>
              <div className={styles.inicio}>{ventajasDeNuestrosCursos}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Margin;
