import { FunctionComponent } from "react";
import styles from "./OverlayBorder.module.css";

export type OverlayBorderType = {
  className?: string;
};

const OverlayBorder: FunctionComponent<OverlayBorderType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.overlayborder, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <div className={styles.container2}>
            <div className={styles.container3}>
              <div className={styles.suscrbeteANuestro}>
                ¡Suscríbete a nuestro newsletter para recibir novedades y
                ofertas exclusivas!
              </div>
            </div>
            <div className={styles.heading4}>
              <b className={styles.subscribeteANuestro}>
                Subscribete a nuestro newsletter
              </b>
            </div>
            <div className={styles.form}>
              <div className={styles.input} />
              <div className={styles.inputmargin}>
                <div className={styles.input1}>
                  <div className={styles.subscribete}>Subscribete</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayBorder;
