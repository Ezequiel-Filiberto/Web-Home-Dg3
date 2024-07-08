import { FunctionComponent } from "react";
import Margin4 from "./Margin4";
import styles from "./INSTITUCION.module.css";

export type INSTITUCIONType = {
  className?: string;
};

const INSTITUCION: FunctionComponent<INSTITUCIONType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.institucion, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.heading2}>
          <b className={styles.caractersticas}>CARACTERÍSTICAS</b>
        </div>
        <div className={styles.container1}>
          <div className={styles.loQueNos}>Lo Que Nos Diferencia</div>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.margin}>
          <div className={styles.container3}>
            <img
              className={styles.featurespngIcon}
              alt=""
              src="/featurespng@2x.png"
            />
          </div>
        </div>
        <div className={styles.margin1}>
          <div className={styles.container4}>
            <div className={styles.container5}>
              <Margin4 entrenadoresProfesionales="1. Entrenadores Profesionales" />
              <Margin4
                entrenadoresProfesionales="4. Ambiente Acogedor"
                propMinWidth="unset"
                propMarginLeft="unset"
              />
              <Margin4
                entrenadoresProfesionales="2. Instalaciones Modernas"
                propMinWidth="unset"
                propMarginLeft="unset"
              />
              <Margin4
                entrenadoresProfesionales="5. Variedad de Actividades"
                propMinWidth="unset"
                propMarginLeft="unset"
              />
              <Margin4
                entrenadoresProfesionales="3. Programas Personalizados"
                propMinWidth="unset"
                propMarginLeft="unset"
              />
              <div className={styles.margin2}>
                <div className={styles.container6}>
                  <div className={styles.margin3}>
                    <div className={styles.overlay}>
                      <div className={styles.container7}>
                        <img className={styles.icon} alt="" src="/icon8.svg" />
                      </div>
                    </div>
                  </div>
                  <div className={styles.heading3}>
                    <div className={styles.resultadosComprobados}>
                      <ol className={styles.resultadosComprobados1}>
                        <li>Resultados Comprobados</li>
                      </ol>
                    </div>
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

export default INSTITUCION;
