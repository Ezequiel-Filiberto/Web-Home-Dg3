import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Margin3.module.css";

export type Margin3Type = {
  className?: string;
  blog1jpg?: string;
  mejoraIntegralDeLaSalud?: string;
  nuestrosCursosEstnDiseado?: string;

  /** Style props */
  propMarginLeft?: CSSProperties["marginLeft"];
};

const Margin3: FunctionComponent<Margin3Type> = ({
  className = "",
  blog1jpg,
  mejoraIntegralDeLaSalud,
  nuestrosCursosEstnDiseado,
  propMarginLeft,
}) => {
  const margin2Style: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  return (
    <div className={[styles.margin, className].join(" ")} style={margin2Style}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <img className={styles.blog1jpgIcon} alt="" src={blog1jpg} />
        </div>
        <div className={styles.container2}>
          <div className={styles.heading3margin}>
            <div className={styles.heading3}>
              <b className={styles.mejoraIntegralDe}>
                {mejoraIntegralDeLaSalud}
              </b>
            </div>
          </div>
          <div className={styles.container3} />
          <div className={styles.container4}>
            <div className={styles.nuestrosCursosEstn}>
              {nuestrosCursosEstnDiseado}
            </div>
          </div>
          <div className={styles.link}>
            <div className={styles.container5}>
              <div className={styles.leerMs}>Leer más</div>
            </div>
            <div className={styles.margin1}>
              <div className={styles.container6}>
                <img className={styles.icon} alt="" src="/icon11.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Margin3;
