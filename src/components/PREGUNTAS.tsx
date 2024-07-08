import { FunctionComponent } from "react";
import HorizontalBorder from "./HorizontalBorder";
import styles from "./PREGUNTAS.module.css";

export type PREGUNTASType = {
  className?: string;
};

const PREGUNTAS: FunctionComponent<PREGUNTASType> = ({ className = "" }) => {
  return (
    <div className={[styles.preguntas, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.heading2}>
          <b className={styles.faqs}>FAQs</b>
        </div>
        <div className={styles.container1}>
          <b className={styles.preguntasFrecuentes}>Preguntas Frecuentes</b>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.container3}>
          <div className={styles.container4}>
            <div className={styles.container5}>
              <div className={styles.horizontalborder}>
                <div className={styles.heading3}>
                  <div className={styles.culEsElContainer}>
                    <ol className={styles.culEsElHorarioDeApertura}>
                      <li>¿Cuál es el horario de apertura de Almacenit?</li>
                    </ol>
                  </div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.container7}>
                    <div className={styles.respuestaAlmacenitEst}>
                      Respuesta: Almacenit está abierto de lunes a viernes de
                      6:00 a.m. a 10:00 p.m., y los sábados y domingos de 8:00
                      a.m. a 8:00 p.m. Los horarios de las clases varían y
                      pueden consultarse en nuestro calendario en línea.
                    </div>
                  </div>
                </div>
                <div className={styles.container8}>
                  <div className={styles.container9}>
                    <img className={styles.icon} alt="" src="/icon17.svg" />
                  </div>
                </div>
              </div>
              <HorizontalBorder quTiposDeClasesOfrecenEnA="¿Qué tipos de clases ofrecen en Almacenit?" />
              <HorizontalBorder quTiposDeClasesOfrecenEnA="¿Necesito reservar las clases con antelación?" />
            </div>
          </div>
          <div className={styles.container4}>
            <div className={styles.container5}>
              <HorizontalBorder quTiposDeClasesOfrecenEnA="¿Ofrecen planes de nutrición personalizados?" />
              <HorizontalBorder quTiposDeClasesOfrecenEnA="¿Puedo cambiar mi plan de pago una vez inscrito?" />
              <HorizontalBorder quTiposDeClasesOfrecenEnA="¿Hay estacionamiento disponible para los miembros?" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PREGUNTAS;
