import { FunctionComponent } from "react";
import styles from "./FOTOSULTIMOSTRABAJOS.module.css";

export type FOTOSULTIMOSTRABAJOSType = {
  className?: string;
};

const FOTOSULTIMOSTRABAJOS: FunctionComponent<FOTOSULTIMOSTRABAJOSType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.fotosUltimosTrabajos, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.heading2}>
          <b className={styles.portfolio}>Portfolio</b>
        </div>
        <div className={styles.container1}>
          <b className={styles.nuestrasFotosRecientes}>
            Nuestras Fotos Recientes
          </b>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.container3}>
          <div className={styles.list}>
            <div className={styles.item}>
              <div className={styles.todas}>Todas</div>
            </div>
            <div className={styles.item1}>
              <div className={styles.todas}>App</div>
            </div>
            <div className={styles.item1}>
              <div className={styles.todas}>Yoga</div>
            </div>
            <div className={styles.item1}>
              <div className={styles.todas}>Entrenamiento</div>
            </div>
            <div className={styles.item1}>
              <div className={styles.todas}>Estiramientos</div>
            </div>
          </div>
          <div className={styles.container4}>
            <div className={styles.container5}>
              <div className={styles.container6}>
                <img
                  className={styles.app1jpgIcon}
                  alt=""
                  src="/app1jpg@2x.png"
                />
              </div>
            </div>
            <div className={styles.container7}>
              <div className={styles.container8}>
                <img
                  className={styles.product1jpgIcon}
                  alt=""
                  src="/product1jpg@2x.png"
                />
              </div>
            </div>
            <div className={styles.container9}>
              <div className={styles.container8}>
                <img
                  className={styles.product1jpgIcon}
                  alt=""
                  src="/product1jpg@2x.png"
                />
              </div>
            </div>
            <div className={styles.container11}>
              <div className={styles.container8}>
                <img
                  className={styles.product1jpgIcon}
                  alt=""
                  src="/product1jpg@2x.png"
                />
              </div>
            </div>
            <div className={styles.container13}>
              <div className={styles.container8}>
                <img
                  className={styles.product1jpgIcon}
                  alt=""
                  src="/product1jpg@2x.png"
                />
              </div>
            </div>
            <div className={styles.container15}>
              <div className={styles.container16}>
                <img
                  className={styles.branding1jpgIcon}
                  alt=""
                  src="/branding1jpg@2x.png"
                />
              </div>
            </div>
            <div className={styles.container17}>
              <div className={styles.container18}>
                <img
                  className={styles.app2jpgIcon}
                  alt=""
                  src="/app2jpg@2x.png"
                />
              </div>
            </div>
            <div className={styles.container19}>
              <div className={styles.container18}>
                <img
                  className={styles.app2jpgIcon}
                  alt=""
                  src="/app2jpg@2x.png"
                />
              </div>
            </div>
            <div className={styles.container21}>
              <div className={styles.container18}>
                <img
                  className={styles.app2jpgIcon}
                  alt=""
                  src="/app2jpg@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FOTOSULTIMOSTRABAJOS;
