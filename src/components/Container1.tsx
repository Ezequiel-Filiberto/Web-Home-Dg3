import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Container1.module.css";

export type Container1Type = {
  className?: string;
  icon?: string;
  icon1?: string;
  heroImgpng?: string;
  heroImgpngIcon?: boolean;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propPadding?: CSSProperties["padding"];
};

const Container1: FunctionComponent<Container1Type> = ({
  className = "",
  icon,
  icon1,
  heroImgpng,
  heroImgpngIcon,
  propWidth,
  propFlex,
  propPadding,
}) => {
  const container1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      padding: propPadding,
    };
  }, [propWidth, propFlex, propPadding]);

  return (
    <div
      className={[styles.container, className].join(" ")}
      style={container1Style}
    >
      <div className={styles.container1}>
        <div className={styles.margin}>
          <div className={styles.container2}>
            <div className={styles.heading1}>
              <div className={styles.tuBienestarNuestra}>
                Tu Bienestar, Nuestra Prioridad
              </div>
            </div>
            <div className={styles.unEntornoSeguro}>
              Un entorno seguro para transformar tu vida.
            </div>
            <div className={styles.margin1}>
              <div className={styles.container3} />
            </div>
            <div className={styles.container4}>
              <div className={styles.link}>
                <div className={styles.empezar}>Empezar</div>
                <div className={styles.margin2}>
                  <div className={styles.container5}>
                    <img className={styles.icon} alt="" src={icon} />
                  </div>
                </div>
              </div>
              <div className={styles.linkmargin}>
                <div className={styles.link1}>
                  <div className={styles.margin3}>
                    <div className={styles.container5}>
                      <img className={styles.icon1} alt="" src={icon1} />
                    </div>
                  </div>
                  <div className={styles.container7}>
                    <div className={styles.verVideo}>Ver video</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container1;
