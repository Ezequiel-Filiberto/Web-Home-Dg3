import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Margin2.module.css";

export type Margin2Type = {
  className?: string;
  team1jpg?: string;
  image?: string;
  carlosMartnez?: string;
  entrenamientoFuncional?: string;
  conMsDe10AosDeExperiencia?: string;

  /** Style props */
  propMarginLeft?: CSSProperties["marginLeft"];
};

const Margin2: FunctionComponent<Margin2Type> = ({
  className = "",
  team1jpg,
  image,
  carlosMartnez,
  entrenamientoFuncional,
  conMsDe10AosDeExperiencia,
  propMarginLeft,
}) => {
  const margin3Style: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  return (
    <div className={[styles.margin, className].join(" ")} style={margin3Style}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <div className={styles.container2}>
            <img className={styles.team1jpgIcon} alt="" src={team1jpg} />
            <img className={styles.imageIcon} alt="" src={image} />
          </div>
          <div className={styles.container3}>
            <div className={styles.heading4}>
              <b className={styles.carlosMartnez}>{carlosMartnez}</b>
            </div>
            <div className={styles.container4}>
              <div className={styles.entrenamientoFuncional}>
                {entrenamientoFuncional}
              </div>
            </div>
            <div className={styles.container5}>
              <i className={styles.conMsDe}>{conMsDe10AosDeExperiencia}</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Margin2;
