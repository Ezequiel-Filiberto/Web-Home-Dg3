import { FunctionComponent } from "react";
import styles from "./Group.module.css";

export type GroupType = {
  className?: string;
  laVariedadDeClasesYLaCali?: string;
  testimonials2jpg?: string;
  carlosMartnez?: string;
  diseador?: string;
};

const Group: FunctionComponent<GroupType> = ({
  className = "",
  laVariedadDeClasesYLaCali,
  testimonials2jpg,
  carlosMartnez,
  diseador,
}) => {
  return (
    <div className={[styles.group25, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.margin}>
          <div className={styles.container1}>
            <div className={styles.container2}>
              <div className={styles.container3}>
                <img className={styles.icon} alt="" src="/icon12.svg" />
              </div>
            </div>
            <div className={styles.container2}>
              <div className={styles.container3}>
                <img className={styles.icon} alt="" src="/icon12.svg" />
              </div>
            </div>
            <div className={styles.container2}>
              <div className={styles.container3}>
                <img className={styles.icon} alt="" src="/icon12.svg" />
              </div>
            </div>
            <div className={styles.container2}>
              <div className={styles.container3}>
                <img className={styles.icon} alt="" src="/icon12.svg" />
              </div>
            </div>
            <div className={styles.container2}>
              <div className={styles.container3}>
                <img className={styles.icon} alt="" src="/icon12.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.margin1}>
          <div className={styles.container12}>
            <i className={styles.laVariedadDe}>{laVariedadDeClasesYLaCali}</i>
          </div>
        </div>
        <div className={styles.margin2}>
          <div className={styles.container13}>
            <img
              className={styles.testimonials2jpgIcon}
              alt=""
              src={testimonials2jpg}
            />
            <div className={styles.heading3}>
              <b className={styles.carlosMartnez}>{carlosMartnez}</b>
            </div>
            <div className={styles.heading4}>
              <div className={styles.diseador}>{diseador}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
