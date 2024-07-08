import { FunctionComponent } from "react";
import Container from "./Container";
import styles from "./UBICACION.module.css";

export type UBICACIONType = {
  className?: string;
};

const UBICACION: FunctionComponent<UBICACIONType> = ({ className = "" }) => {
  return (
    <div className={[styles.ubicacion, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <div className={styles.container2}>
            <div className={styles.overlay}>
              <div className={styles.heading2}>
                <b className={styles.ubicacin}>UBICACIÓN</b>
              </div>
              <div className={styles.container3}>
                <div className={styles.nuestraSedeSeContainer}>
                  <span className={styles.nuestraSedeSeContainer1}>
                    <span
                      className={styles.nuestraSedeSe}
                    >{`Nuestra sede se encuentra en `}</span>
                    <span className={styles.entornoCmodoY}>
                      Avenida Libertador 1234, Palermo, Buenos Aires, Argentina.
                    </span>
                    <span
                      className={styles.nuestraSedeSe}
                    >{` Ubicada en el corazón de Palermo, una de las zonas más vibrantes y accesibles de la ciudad, ofrecemos un `}</span>
                    <span className={styles.entornoCmodoY}>
                      entorno cómodo y de fácil acceso
                    </span>
                    <span
                      className={styles.nuestraSedeSe}
                    >{` tanto en transporte público como en coche. Con numerosos cafés, tiendas y parques cercanos, es el lugar perfecto para integrar tu rutina de `}</span>
                    <span className={styles.entornoCmodoY}>
                      bienestar en tu vida diaria.
                    </span>
                  </span>
                </div>
              </div>
              <Container
                leerMs="Leer más"
                icon="/icon9.svg"
                propPadding="22px 0px 0px"
              />
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

export default UBICACION;
