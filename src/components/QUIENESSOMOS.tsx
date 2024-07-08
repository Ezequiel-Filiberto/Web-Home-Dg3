import { FunctionComponent } from "react";
import Container from "./Container";
import styles from "./QUIENESSOMOS.module.css";

export type QUIENESSOMOSType = {
  className?: string;
};

const QUIENESSOMOS: FunctionComponent<QUIENESSOMOSType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.quienesSomos, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <div className={styles.container2}>
            <div className={styles.overlay}>
              <div className={styles.heading2}>
                <b className={styles.quienesSomos1}>¿QUIENES SOMOS?</b>
              </div>
              <div className={styles.container3}>
                <div className={styles.aquTienesUnaContainer}>
                  <span className={styles.aquTienesUnaContainer1}>
                    <p className={styles.aquTienesUna}>
                      Aquí tienes una versión más resumida y amigable del texto:
                    </p>
                    <p className={styles.aquTienesUna}>
                      <span>{`En `}</span>
                      <b className={styles.almacenit}>Almacenit</b>
                      <span className={styles.almacenit}>
                        , mejoramos tu bienestar y salud física.
                      </span>
                    </p>
                    <p className={styles.aquTienesUna}>
                      <span
                        className={styles.almacenit}
                      >{`Ofrecemos un `}</span>
                      <b className={styles.almacenit}>
                        espacio moderno y acogedor
                      </b>
                      <span>
                        {" "}
                        con entrenadores certificados y programas personalizados
                        para alcanzar tus metas. Creemos en un enfoque integral,
                        combinando ejercicio, nutrición y recuperación.
                      </span>
                    </p>
                    <p className={styles.aquTienesUna}>&nbsp;</p>
                    <ul className={styles.entrenadoresCertificadosInst}>
                      <li className={styles.entrenadoresCertificados}>
                        <b>Entrenadores Certificados</b>
                      </li>
                      <li className={styles.entrenadoresCertificados}>
                        <b>Instalaciones de Vanguardia</b>
                      </li>
                      <li className={styles.entrenadoresCertificados}>
                        <b>Programas Personalizados</b>
                      </li>
                      <li>
                        <b>Centro Físico para que Vengas a Entrenar</b>
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
              <Container leerMs="Leer más" icon="/icon.svg" />
            </div>
          </div>
          <div className={styles.container4}>
            <img
              className={styles.aboutjpgIcon}
              alt=""
              src="/aboutjpg@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QUIENESSOMOS;
